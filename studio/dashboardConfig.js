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
                  buildHookId: '6023910d9a58485042e74ddc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-example-studio',
                  apiId: 'b6d2d9fa-1db5-4d56-8dfc-f5d003b656c5'
                },
                {
                  buildHookId: '6023910d017ed5557d9d7914',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-example',
                  apiId: 'd089b7cc-a749-4887-805c-d1a309dd3a8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-kitchen-sink-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-example.netlify.app', category: 'apps'}
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
