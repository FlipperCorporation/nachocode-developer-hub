import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'nachocode Developer',
  tagline: '가장 빠르고 쉬운 노코드 & 로우코드 앱 빌더, nachocode',
  url: 'https://developer.nachocode.io',
  favicon: 'favicon-32x32.png',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'FlipperCorporation',
  projectName: 'nachocode-developer-hub',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
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
    image: 'img/og_image.png',
    docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
    navbar: {
      title: 'nachocode',
      logo: { alt: 'nachocode', src: 'img/logo.png' },
      items: [
        {
          label: '서비스 소개',
          type: 'doc',
          docId: 'intro', // 서비스 소개 페이지로 이동
          position: 'left',
        },
        {
          label: '가이드',
          type: 'doc',
          docId: 'guide/intro', // Guide의 시작 페이지로 이동
          position: 'left',
        },
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
            { label: 'User Guide', to: 'https://docs.nachocode.io' },
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
            { label: 'nachocode.io', href: 'https://nachocode.io' },
            { label: 'GitHub', href: 'https://github.com/FlipperCorporation' },
            { label: 'Discord', href: 'https://discord.gg/SU5wFmRw' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flipper Corporation, Inc. All Rights Reserved.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
