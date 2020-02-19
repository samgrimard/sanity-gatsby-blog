export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4d90fc49d3e0f09265c391',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7fjf9rvq',
                  apiId: '697e2445-d407-4085-908c-27296fa799f8'
                },
                {
                  buildHookId: '5e4d90fcbb8422f3427873da',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-63s3336f',
                  apiId: 'd922c687-5a6f-4699-b4ea-f209d393b7bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samgrimard/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-63s3336f.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
