module.exports = {
    title: "SEDOO metadata example",
    logo: "https://www4.obs-mip.fr/wp-content-omp/uploads/sites/21/2017/07/sedoo-full.png",
    head: [
        ["meta", { name: "charset", content: "utf-8" }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' }]
    ],
    description: 'by Sedoo',
    base: '/sedoo/',
    locales: {
        "/": {
          lang: "en-US",
          title: "Documentation sedoo metadata components",
        },
        "/fr/": {
          lang: "fr-FR",
          title: "Documentation des composants de metadonnées sedoo",
        },
      },    
    themeConfig: {
        logo: "https://www4.obs-mip.fr/wp-content-omp/uploads/sites/21/2017/07/sedoo-full.png",
        locales: {
            "/": {
                // text for the language dropdown
                selectText: "Languages",
                // label for this locale in the language dropdown
                label: "English",
                 // Aria Label for locale in the dropdown
                ariaLabel: "Languages",        
                nav: [
                    { text: 'root', link: '/' },
                    { text: "git", link: 'https://github.com/sedoo/sedoo-metadatabloc-example' },
                ],
                sidebar:  [
                    {
                        title: 'components',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            './component-pages/my-project-fake-block/'
                        ]
                    }
                ],
            },
            "/fr/": {
                selectText: "Langues",
                label: "Français",
                ariaLabel: "Langues",
                nav: [
                    { text: 'root', link: '/' },
                    { text: "git", link: 'https://github.com/sedoo/sedoo-metadatabloc-example' },
                ],
                sidebar:  [
                    {
                        title: 'composants',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            './fr/component-pages/my-project-fake-block/'
                        ]
                    }
                ],
            }
        }
    }
}


    
