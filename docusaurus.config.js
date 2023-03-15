// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCLAB Documents',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sclab.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sclab-io', // Usually your GitHub org/user name.
  projectName: 'sclab-io.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sclab-io/sclab-io.github.io/tree/main/',
          editLocalizedFiles: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sclab-io/sclab-io.github.io/tree/main/',
          editLocalizedFiles: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_large.png',
      navbar: {
        title: 'SCLAB Documents',
        logo: {
          alt: 'SCLAB LOGO',
          src: 'img/sclab_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'guide/intro',
            position: 'left',
            label: 'User guide',
            sidebarId: 'guide'
          },
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'left',
            label: 'API',
            sidebarId: 'api',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/sclab-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documents',
            items: [
              {
                label: 'User guide',
                to: '/docs/guide/intro',
              },
              {
                label: 'API',
                to: '/docs/api/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@SCLABStudio',
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
                label: 'SCLAB Studio',
                href: 'https://www.sclab.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sclab-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCLAB, INC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
