# EchoDash Documentation Site

This is the documentation site for [echodash.com](https://echodash.com), built using [Docusaurus](https://docusaurus.io/).

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server on port 3001 and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build

```

This command:
1. Generates static content into the `build` directory
2. Automatically copies the built files to `../echodash-mvp/public/`

The docs will be available at `localhost:3000/docs/intro` and the blog at `localhost:3000/blog`.

### Development Notes

- The landing page and docs share the same domain but are separate apps
- Landing page is served by Rails from `../echodash-mvp`
- Docs/blog are static files served from `../echodash-mvp/public/`