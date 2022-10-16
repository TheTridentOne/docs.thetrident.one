/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    "index",
    {
      type: "category",
      label: "Terminology",
      collapsed: false,
      items: ["terminology/nft", "terminology/collection"],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: [
        "tutorials/how-to-create-collection",
        "tutorials/how-to-mint",
        "tutorials/how-to-sell",
        "tutorials/how-to-auction",
        "tutorials/how-to-buy",
      ],
    },
    {
      type: "category",
      label: 'Assistant',
      collapsed: false,
      items: [
        "assistant/why-assistant",
        "assistant/how-it-works",
        "assistant/how-to-login",
        "assistant/how-to-generate-nft",
        "assistant/faq",
      ],
    },
    {
      type: "category",
      label: "FAQ",
      collapsed: false,
      items: [
        "faq/how-it-works",
        "faq/it-is-free-to-mint",
        "faq/which-blockchains-does-trident-support",
        "faq/fee-royalty-and-split",
        "faq/what-is-a-verified-account-or-collection",
      ],
    },
  ],
};

module.exports = sidebars;
