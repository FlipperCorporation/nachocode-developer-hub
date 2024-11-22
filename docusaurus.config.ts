import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Nachocode Developer Hub",
  tagline: "The Easiest App Builder Solution, Nachocode",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developer.nachocode.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FlipperCorporation", // Usually your GitHub org/user name.
  projectName: "nachocode-developer-hub", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Nachocode",
      logo: {
        alt: "Nachocode",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "SDK",
        },
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "API",
        },
        {
          href: "https://github.com/FlipperCorporation",
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
              label: "SDK",
              to: "/docs/sdk/intro",
            },
            {
              label: "API",
              to: "/docs/api/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/SU5wFmRw",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nachocode.official",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/people/Nachocodeofficial/61554676677985",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/FlipperCorporation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flipper Corporation, Inc. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
