export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f297b1f493fdb6652e3e415',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-htke486i',
                  apiId: 'ea9de4b6-6ff2-437c-a2cd-ace6e5eb0843'
                },
                {
                  buildHookId: '5f297b1fc7718b1e26fe5a4f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ztpoc5bj',
                  apiId: '6c5a25a5-6fe7-486d-a067-2abc3819bfbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jseb2520/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ztpoc5bj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
