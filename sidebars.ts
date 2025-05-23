import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', label: '서비스소개', id: 'intro' },
    {
      type: 'category',
      label: '가이드',
      link: { type: 'generated-index', slug: 'guide/intro' },
      items: [
        'guide/intro',
        'guide/personal-push',
        'guide/iap',
        {
          type: 'category',
          label: '웹훅',
          link: { type: 'generated-index', slug: 'guide/webhook/overview' },
          items: [
            'guide/webhook/overview',
            {
              type: 'category',
              label: '인앱결제',
              items: ['guide/webhook/iap/purchase', 'guide/webhook/iap/refund'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: { type: 'generated-index', slug: 'api/intro' },
      items: [
        'api/intro',
        {
          type: 'category',
          label: '개인화 푸시',
          link: { type: 'generated-index', slug: 'api/push/overview' },
          items: ['api/push/overview', 'api/push/endpoints'],
        },
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      link: { type: 'generated-index', slug: 'sdk/intro' },
      collapsed: false,
      items: [
        'sdk/intro',
        'sdk/getting-started',
        'sdk/typescript-support',
        'sdk/react-support',
        {
          type: 'category',
          label: '네임스페이스',
          collapsed: false,
          items: [
            'sdk/namespaces/app',
            'sdk/namespaces/apple',
            'sdk/namespaces/authentication',
            'sdk/namespaces/backkey',
            'sdk/namespaces/browser',
            'sdk/namespaces/clipboard',
            'sdk/namespaces/device',
            'sdk/namespaces/env',
            'sdk/namespaces/event',
            'sdk/namespaces/facebook',
            'sdk/namespaces/google',
            'sdk/namespaces/iap',
            'sdk/namespaces/kakao',
            'sdk/namespaces/permission',
            'sdk/namespaces/preference',
            'sdk/namespaces/push',
            'sdk/namespaces/refresh',
            'sdk/namespaces/scanner',
            'sdk/namespaces/setting',
            'sdk/namespaces/share',
            'sdk/namespaces/tabbar',
            'sdk/namespaces/vibration',
          ],
        },
        {
          type: 'category',
          label: '릴리즈 노트',
          link: { type: 'generated-index', slug: 'sdk/releases/v1/intro' },
          items: [
            'sdk/releases/v1/intro',
            'sdk/releases/v1/release-v-1-5-0',
            'sdk/releases/v1/release-v-1-4-2',
            'sdk/releases/v1/release-v-1-4-1',
            'sdk/releases/v1/release-v-1-4-0',
            'sdk/releases/v1/release-v-1-3-0',
            'sdk/releases/v1/release-v-1-2-0',
            'sdk/releases/v1/release-v-1-1-0',
            'sdk/releases/v1/release-v-1-0-3',
            'sdk/releases/v1/release-v-1-0-2',
            'sdk/releases/v1/release-v-1-0-0',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
