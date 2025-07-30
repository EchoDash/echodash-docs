---
sidebar_position: 3
title: External App Integration
description: Learn how to integrate EchoDash endpoint creation into your external applications with seamless user redirects
---

# External App Integration

EchoDash provides a seamless way for external applications to redirect users to create endpoints and receive the endpoint URL back for automatic configuration. This makes it easy to add one-click EchoDash integration to your app, plugin, or service.

## Integration Overview

The integration flow works in three simple steps:

1. **Redirect User**: Your app redirects the user to EchoDash with pre-filled information
2. **User Creates Endpoint**: User logs in (if needed) and creates an endpoint with your pre-filled data
3. **Redirect Back**: EchoDash redirects back to your app with the new endpoint URL

## Base URL and Parameters

### Base URL
```
https://echodash.com/endpoints/new
```

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `redirect_uri` | URL to redirect back to after endpoint creation | `https://example.com/integration/complete` |
| `state` | Unique identifier to prevent CSRF attacks | `abc123def456` |

### Optional Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `source` | Pre-fill the endpoint source name | `WordPress` |
| `site_name` | Pre-fill the endpoint title | `My Blog Site` |
| `a` | Action identifier for analytics | `plugin_install` |

## Complete Integration Example

Here's a complete URL showing all parameters:

```
https://echodash.com/endpoints/new?source=WordPress&site_name=Example%20Site&redirect_uri=https%3A%2F%2Fexample.com%2Fwp-admin%2Foptions-general.php%3Fpage%3Dechodash&state=abc123def456&a=plugin_install
```

## Response Handling

When the user successfully creates an endpoint, EchoDash will redirect back to your `redirect_uri` with these parameters:

### Success Response

```
https://your-app.com/callback?state=abc123def456&endpoint_url=https://echodash.com/endpoints/your-new-endpoint-slug/receive
```

| Parameter | Description |
|-----------|-------------|
| `state` | The same state parameter you sent |
| `endpoint_url` | The complete webhook URL for the new endpoint |

### Error Handling

If the user cancels or an error occurs, EchoDash will redirect back with an error parameter:

```
https://your-app.com/callback?state=abc123def456&error=user_cancelled
```

Common error values:
- `user_cancelled` - User cancelled the flow
- `invalid_redirect_uri` - The redirect URI is not allowed
- `missing_state` - State parameter is required

## Implementation Examples

### WordPress Plugin

```php
<?php
/**
 * Redirect user to EchoDash to create endpoint
 */
function redirect_to_echodash() {
    $redirect_uri = admin_url('options-general.php?page=echodash');
    $state = wp_create_nonce('echodash_integration');
    $site_name = get_bloginfo('name');
    
    $params = http_build_query([
        'source' => 'WordPress',
        'site_name' => $site_name,
        'redirect_uri' => $redirect_uri,
        'state' => $state,
        'a' => 'plugin_install'
    ]);
    
    $url = "https://echodash.com/endpoints/new?" . $params;
    wp_redirect($url);
    exit;
}

/**
 * Handle callback from EchoDash
 */
function handle_echodash_callback() {
    if (!isset($_GET['state']) || !wp_verify_nonce($_GET['state'], 'echodash_integration')) {
        wp_die('Invalid state parameter');
    }
    
    if (isset($_GET['error'])) {
        add_admin_notice('EchoDash integration failed: ' . sanitize_text_field($_GET['error']), 'error');
        return;
    }
    
    if (isset($_GET['endpoint_url'])) {
        $endpoint_url = sanitize_url($_GET['endpoint_url']);
        update_option('echodash_endpoint_url', $endpoint_url);
        add_admin_notice('EchoDash endpoint configured successfully!', 'success');
    }
}
```

### JavaScript/Node.js

```javascript
// Redirect user to EchoDash
function redirectToEchoDash(siteName) {
    const redirectUri = `${window.location.origin}/integration/callback`;
    const state = generateSecureToken(); // Your CSRF token generation
    
    const params = new URLSearchParams({
        source: 'My App',
        site_name: siteName,
        redirect_uri: redirectUri,
        state: state,
        a: 'app_integration'
    });
    
    // Store state for validation
    sessionStorage.setItem('echodash_state', state);
    
    window.location.href = `https://echodash.com/endpoints/new?${params}`;
}

// Handle callback
function handleCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const storedState = sessionStorage.getItem('echodash_state');
    
    if (!state || state !== storedState) {
        throw new Error('Invalid state parameter');
    }
    
    if (urlParams.has('error')) {
        console.error('Integration failed:', urlParams.get('error'));
        return;
    }
    
    if (urlParams.has('endpoint_url')) {
        const endpointUrl = urlParams.get('endpoint_url');
        // Save endpoint URL to your configuration
        saveEndpointUrl(endpointUrl);
        console.log('Endpoint configured:', endpointUrl);
    }
}
```

### Python/Django

```python
import secrets
import urllib.parse
from django.shortcuts import redirect
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

def initiate_echodash_integration(request):
    """Redirect user to EchoDash"""
    redirect_uri = request.build_absolute_uri('/integration/callback/')
    state = secrets.token_urlsafe(32)
    
    # Store state in session for validation
    request.session['echodash_state'] = state
    
    params = {
        'source': 'My Python App',
        'site_name': request.GET.get('site_name', 'My Site'),
        'redirect_uri': redirect_uri,
        'state': state,
        'a': 'python_integration'
    }
    
    url = f"https://echodash.com/endpoints/new?{urllib.parse.urlencode(params)}"
    return redirect(url)

@csrf_exempt
def handle_callback(request):
    """Handle callback from EchoDash"""
    state = request.GET.get('state')
    stored_state = request.session.get('echodash_state')
    
    if not state or state != stored_state:
        return HttpResponseBadRequest('Invalid state parameter')
    
    if 'error' in request.GET:
        # Handle error
        return render(request, 'integration_error.html', {
            'error': request.GET['error']
        })
    
    if 'endpoint_url' in request.GET:
        endpoint_url = request.GET['endpoint_url']
        # Save to your model/configuration
        save_endpoint_configuration(endpoint_url)
        return render(request, 'integration_success.html', {
            'endpoint_url': endpoint_url
        })
```

## Security Best Practices

### State Parameter
Always use a cryptographically secure random state parameter to prevent CSRF attacks:

```javascript
// Good - cryptographically secure
const state = crypto.getRandomValues(new Uint8Array(16)).join('');

// Bad - predictable
const state = Date.now().toString();
```

### Redirect URI Validation
Only allow specific redirect URIs in your application. EchoDash validates that the redirect URI matches your registered domain.

### HTTPS Only
Always use HTTPS for redirect URIs to prevent token interception.

## URL Encoding

Remember to properly URL encode all parameters, especially the `redirect_uri`:

```javascript
const redirectUri = 'https://example.com/admin?page=settings&tab=integration';
const encoded = encodeURIComponent(redirectUri);
// Result: https%3A%2F%2Fexample.com%2Fadmin%3Fpage%3Dsettings%26tab%3Dintegration
```

## Testing Your Integration

### 1. Test the Full Flow
1. Generate a redirect URL with your parameters
2. Visit the URL in a browser
3. Complete the endpoint creation process
4. Verify your callback receives the correct parameters

### 2. Test Error Scenarios
- Invalid redirect URI
- Missing state parameter
- User cancellation

### 3. Validate State Parameters
Ensure your state validation prevents CSRF attacks by testing with modified state values.

## Common Integration Patterns

### Plugin/Extension Installation
```
source=WordPress&a=plugin_install&site_name=User's%20Site
```

### SaaS Application Setup
```
source=MyApp&a=account_setup&site_name=Company%20Name
```

### Developer Tool Integration
```
source=DevTool&a=project_setup&site_name=Project%20Name
```

## Troubleshooting

### "Invalid redirect URI" Error
- Ensure your redirect URI uses HTTPS
- Verify the domain matches your registered application
- Check that URL encoding is correct

### Missing State Parameter
- Always include a state parameter in your initial redirect
- Verify the parameter is being passed correctly

### User Gets Stuck in Loop
- Check that your callback handler doesn't redirect back to EchoDash
- Ensure error handling doesn't cause infinite redirects

## Support

If you need help implementing EchoDash integration:

1. Check that your redirect URI is properly formatted and accessible
2. Verify all required parameters are included
3. Test the integration flow manually before automating
4. Review the security best practices above

For additional support, contact the EchoDash team with details about your integration use case.