import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      label: '서비스소개',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'SDK',
      link: {
        type: 'generated-index',
        slug: 'sdk/intro',
      },
      items: [
        'sdk/intro',
        'sdk/getting-started',
        {
          type: 'category',
          label: '네임스페이스',
          items: [
            'sdk/namespaces/app',
            'sdk/namespaces/authentication',
            'sdk/namespaces/backkey',
            'sdk/namespaces/browser',
            'sdk/namespaces/device',
            'sdk/namespaces/env',
            'sdk/namespaces/event',
            'sdk/namespaces/iap',
            'sdk/namespaces/permission',
            'sdk/namespaces/preference',
            'sdk/namespaces/push',
            'sdk/namespaces/refresh',
            'sdk/namespaces/share',
            'sdk/namespaces/tabbar',
            'sdk/namespaces/vibration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'generated-index',
        slug: 'api/intro',
      },
      items: [
        'api/intro',
        {
          type: 'category',
          label: '푸시 알림',
          link: {
            type: 'generated-index',
            slug: 'api/push/overview',
          },
          items: ['api/push/overview', 'api/push/endpoints'],
        },
      ],
    },
  ],
};

export default sidebars;
