import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'nachocode Developer Hub',
  tagline: '가장 빠르고 쉬운 노코드 & 로우코드 앱 빌더, nachocode',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developer.nachocode.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FlipperCorporation', // Usually your GitHub org/user name.
  projectName: 'nachocode-developer-hub', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true, // 다크모드 토글 버튼 비활성화
      defaultMode: 'light', // 기본 모드를 라이트로 설정
    },
    image: 'img/og_image.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'nachocode',
      logo: {
        alt: 'nachocode',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'API',
          type: 'doc',
          docId: 'api/intro', // API의 시작 페이지로 이동
          position: 'left',
        },
        {
          label: 'SDK',
          type: 'doc',
          docId: 'sdk/intro', // SDK의 시작 페이지로 이동
          position: 'left',
        },
        {
          label: '가이드',
          type: 'doc',
          docId: 'guide/intro', // Guide의 시작 페이지로 이동
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/FlipperCorporation',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API',
              to: '/docs/api/intro',
            },
            {
              label: 'SDK',
              to: '/docs/sdk/intro',
            },
            {
              label: '가이드',
              to: '/docs/guide/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/nachocode',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/nachocode.official',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/people/Nachocodeofficial/61554676677985',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'nachocode.io',
              href: 'https://nachocode.io',
            },
            { label: 'GitHub', href: 'https://github.com/FlipperCorporation' },
            {
              label: 'Discord',
              href: 'https://discord.gg/SU5wFmRw',
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
