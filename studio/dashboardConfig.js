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
                  buildHookId: '605dc77d0e184c0777fbdf5b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zz2tks39',
                  apiId: '4eb06b52-0233-4287-8738-d974632bc27c'
                },
                {
                  buildHookId: '605dc77da5a27df07ffd49cb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-296kkang',
                  apiId: 'faf75d33-4f21-4210-bb0f-7850c35d9e90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LostColonel/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-296kkang.netlify.app', category: 'apps'}
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
