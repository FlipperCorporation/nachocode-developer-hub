import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', label: '서비스소개', id: 'intro' },
    {
      type: 'category',
      label: '가이드',
      link: { type: 'doc', id: 'guide/intro' },
      items: [
        'guide/intro',
        'guide/app-source',
        {
          type: 'category',
          label: '푸시 알림',
          link: { type: 'doc', id: 'guide/push/push-token' },
          items: [
            'guide/push/push-token',
            'guide/push/personal-push',
            'guide/push/topic-push',
          ],
        },
        'guide/iap',
        {
          type: 'category',
          label: '웹훅',
          link: { type: 'doc', id: 'guide/webhook/overview' },
          items: [
            'guide/webhook/overview',
            {
              type: 'category',
              label: '인앱결제',
              items: ['guide/webhook/iap/purchase', 'guide/webhook/iap/refund'],
            },
          ],
        },
        {
          type: 'category',
          label: 'User Agent',
          link: {
            type: 'doc',
            id: 'guide/user-agent/user-agent-definition',
          },
          items: [
            'guide/user-agent/user-agent-definition',
            'guide/user-agent/user-agent-configuration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: { type: 'doc', id: 'api/intro' },
      items: [
        'api/intro',
        {
          type: 'category',
          label: '푸시 알림',
          link: { type: 'doc', id: 'api/push/v2/endpoints' },
          items: ['api/push/v2/endpoints', 'api/push/v1/endpoints'],
        },
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      link: { type: 'doc', id: 'sdk/intro' },
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
            'sdk/namespaces/store',
            'sdk/namespaces/tabbar',
            'sdk/namespaces/vibration',
          ],
        },
        {
          type: 'category',
          label: '릴리즈 노트',
          link: { type: 'doc', id: 'sdk/releases/v1/intro' },
          items: [
            'sdk/releases/v1/intro',
            'sdk/releases/v1/release-v-1-6-1',
            'sdk/releases/v1/release-v-1-6-0',
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
