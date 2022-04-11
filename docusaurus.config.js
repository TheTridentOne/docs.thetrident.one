// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trident Docs",
  tagline: "Trident is cool",
  url: "https://thetrident.one",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "TheTridentOne", // Usually your GitHub org/user name.
  projectName: "docs.thetrident.one", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebar.docs.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/TheTridentOne/docs.thetrident.one/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/TheTridentOne/docs.thetrident.one/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        editCurrentVersion: false,
        editUrl:
          "https://github.com/TheTridentOne/docs.thetrident.one/tree/main/",
        sidebarPath: require.resolve("./sidebar.api.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    // 'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Trident Docs",
        logo: {
          alt: "Trident Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Manuals",
            title: "User Manuals",
          },
          {
            to: "/api/intro",
            label: "API",
            activeBaseRegex: `/api/`,
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Manuals",
                to: "/docs/intro",
              },
              {
                label: "API Docs",
                to: "/api/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/trident_nft",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/TheTridentOne/docs.thetrident.one",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trident, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
  },
};

module.exports = config;
