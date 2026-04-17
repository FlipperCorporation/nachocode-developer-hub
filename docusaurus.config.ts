import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'nachocode Developer',
  tagline: '가장 빠르고 쉬운 노코드 & 로우코드 앱 빌더, nachocode',
  url: 'https://developer.nachocode.io',
  favicon: 'favicon.ico',
  baseUrl: '/',
  trailingSlash: false,
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  organizationName: 'FlipperCorporation',
  projectName: 'nachocode-developer-hub',

  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        href: '/favicon.svg',
        color: '#000000',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Black.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Bold.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-ExtraBold.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-ExtraLight.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Light.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Medium.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Regular.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-SemiBold.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/pretendard/Pretendard-Thin.subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  i18n: { defaultLocale: 'ko', locales: ['ko'] },

  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        gtag:
          process.env.NODE_ENV === 'production'
            ? {
                trackingID: 'G-E023WXQCL8', // Google Analytics 4 측정 ID
              }
            : undefined,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          '개발자, 앱 빌더, 앱 빌드, 로우코드, 웹뷰 앱, 웹 앱, 네이티브 앱, 하이브리드 앱, 안드로이드, Android, iOS, WebView, WKWebView, 나쵸코드, JavaScript, nachocode',
      },
    ],
    colorMode: {
      disableSwitch: true, // 다크모드 토글 버튼 비활성화
      defaultMode: 'light', // 기본 모드를 라이트로 설정
    },
    image: 'img/og-image.png',
    docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
    announcementBar: {
      id: 'sdk_release_v1_10_2',
      content: `📢 <b><a target="_blank" href="/docs/releases/v1/sdk/release-v-1-10-2">nachocode Client SDK v1.10.2</a>이 배포되었습니다!</b> 🚀`,
      isCloseable: true,
    },
    navbar: {
      title: 'nachocode Developer',
      logo: { alt: 'nachocode', src: 'img/logo.png' },
      items: [
        {
          to: 'docs/guide/intro', // Guide의 시작 페이지로 이동
          activeBasePath: 'docs/guide',
          label: '가이드',
          position: 'left',
        },
        {
          to: 'docs/api/intro', // API의 시작 페이지로 이동
          activeBasePath: 'docs/api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/sdk/intro', // SDK의 시작 페이지로 이동
          activeBasePath: 'docs/sdk',
          label: 'SDK',
          position: 'left',
        },
        {
          to: 'docs/releases/v1/sdk/intro', // SDK 릴리즈노트로 이동
          activeBasePath: 'docs/releases',
          label: '릴리즈노트',
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
            { label: 'User Guide', href: 'https://docs.nachocode.io' },
            { label: 'Developer Guide', to: '/docs/guide/intro' },
            { label: 'API', to: '/docs/api/intro' },
            { label: 'SDK', to: '/docs/sdk/intro' },
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
              href: 'https://www.instagram.com/nachocode.io',
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
              href: 'https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide',
            },
            { label: 'GitHub', href: 'https://github.com/FlipperCorporation' },
            { label: 'Discord', href: 'https://discord.gg/6uuw4vRMdk' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flipper Corporation, Inc. All Rights Reserved.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      src: '/js/copy-heading-link.js',
      async: true,
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/android-chrome-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#000000',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'default',
          },
        ],
      },
    ],
  ],
};

export default config;
