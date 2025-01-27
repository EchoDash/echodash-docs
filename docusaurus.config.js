// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EchoDash',
  tagline: 'A real time events platform for everything you do online',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://echodash.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  projectName: 'echodash-docs',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add head tags
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/ClashGrotesk-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
        'font-family': 'Clash'
      },
    },
  ],

  scripts: [
    {
      src: 'https://eu.i.posthog.com/static/array.js',
      async: true,
      defer: true,
    }
  ],

  // Add build optimizations
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EchoDash/echodash-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EchoDash/echodash-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/tailwind.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/og-image.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'EchoDash',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '/users/sign_in',
            label: 'Log In',
            position: 'right',
            target: '_blank',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'EchoDash Logo',
          src: 'img/landing/big-ed.svg',
        },
        links: [
          {
            title: 'EchoDash',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/terms',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://echodash.slack.com',
              },
              {
                label: 'X',
                href: 'https://x.com/echodash',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EchoDash/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EchoDash LTD.`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_b4NxwL0NHDDzeV2KkRbh4DFvLGYbrlahnqK7JNHCADL",
        appUrl: "https://eu.i.posthog.com",
        enableInDevelopment: false,
      },
    ],
  ],
};

export default config;
