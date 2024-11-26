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
            'sdk/namespaces/device',
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
