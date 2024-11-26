import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'SDK',
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
            'sdk/namespaces/permission',
            'sdk/namespaces/preference',
            'sdk/namespaces/push',
            'sdk/namespaces/refresh',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/intro',
        {
          type: 'category',
          label: 'Push Notification',
          items: ['api/push/overview', 'api/push/endpoints'],
        },
      ],
    },
  ],
};

export default sidebars;
