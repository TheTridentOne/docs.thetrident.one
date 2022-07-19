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
          routeBasePath: "/",
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
    async function tailwindcssPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
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
            href: "https://github.com/TheTridentOne/docs.thetrident.one",
            label: "GitHub",
            position: "right",
          },
        ],
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
