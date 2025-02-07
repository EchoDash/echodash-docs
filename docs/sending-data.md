---
sidebar_position: 2
title: Sending Data to EchoDash
description: Learn how to send webhook data to EchoDash and configure request behavior
---

# Sending Data to EchoDash

EchoDash accepts any JSON or form-encoded data via POST request out of the box. By default, it uses AI to automatically analyze your payload and extract the most relevant key/value pairs for display in your event feed. No configuration needed.

```bash
# Simplest possible usage - just POST any JSON data
curl -X POST https://your-echodash-instance/webhooks \
  -H "Content-Type: application/json" \
  -d '{
    "any": "data",
    "will": "work",
    "ai_will": "extract_important_parts"
  }'
```

For more control over how your data is processed and displayed, you can use the options below.

## Request Headers

EchoDash uses specific HTTP headers to identify and process requests:

| Header | Description | Values |
|--------|-------------|---------|
| `User-Agent` | Identifies requests from EchoDash clients | Include "EchoDash" to identify as an EchoDash client |
| `ECD-Summarize` | Controls AI summarization | Set to "false" to disable AI summarization |

## Data Formats

### EchoDash Native Format

When sending data using the EchoDash native format:

```json
{
  "event": "Event Name",
  "source": "Your Source Name",
  "values": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

This will create an event with the name "Event Name" and the source "Your Source Name". The `values` object will be automatically formatted with inferred types:
- Numbers: Numeric values or strings that match numeric patterns
- Dates: Strings matching ISO date format (YYYY-MM-DD)
- URLs: Strings starting with http:// or https://
- Booleans: true/false values
- Text: All other values

## Request Processing

1. **Source Identification**: EchoDash identifies the source of your webhook based on:
   - The `source` field in your payload
   - The `User-Agent` header

2. **Request Classification**: Requests bypass OpenAI summarization when:
   - The User-Agent contains "EchoDash"
   - The `ECD-Summarize` header is set to "false"

3. **Fingerprinting**: Each webhook is uniquely identified to prevent duplicates. Once a webhook is fingerprinted, it will use the source and template of the first event with that fingerprint.

## Examples

### Disable AI Summarization

```bash
curl -X POST https://echodash.com/endpoints/XYZ/receive \
  -H "ECD-Summarize: false" \
  -H "Content-Type: application/json" \
  -d '{
    "event": "New Order",
    "values": {
      "order_id": "12345",
      "amount": 99.99,
      "customer_email": "customer@example.com"
    }
  }'
```

## Best Practices

1. **Consistent Source Names**: Use consistent source names to properly group related webhooks
2. **Meaningful Event Names**: Use descriptive event names that clearly indicate the type of event
3. **Structured Data**: When possible, use the `values` format for automatic type inference
4. **AI Processing**: Only disable AI summarization when you have pre-formatted data or want raw processing