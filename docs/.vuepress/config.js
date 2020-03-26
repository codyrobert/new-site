const path = require('path');

module.exports = {

    title: 'Cody Robert',

    head: [
        ['script', {}, 'document.documentElement.classList.add(\'js\');'],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap' }],
        ['script', { crossorigin: 'anonymous', src: 'https://kit.fontawesome.com/0f924bd517.js' }],
    ],

    evergreen: true,

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {

        nav: [{
            label: 'Getting Started',
            url: '/getting-started/',
        }, {
            label: 'Themes',
            url: '/themes/',
        }, {
            label: 'Block Types',
            url: '/block-types/',
        }, {
            label: 'Field Types',
            url: '/field-types/',
        }, {
            label: 'Learn More',
            children: [{
                label: 'API',
                children: [{
                    label: 'CLI',
                    url: '/api/cli',
                }, {
                    label: 'Hooks',
                    url: '/api/hooks',
                }, {
                    label: 'Plugins',
                    url: '/api/plugins',
                }],
            }, {
                label: 'Design Concepts',
                children: [{
                    label: 'Glossary',
                    url: '/design-concepts/glossary',
                }],
            }, {
                label: 'Reference',
                children: [{
                    label: 'Actions',
                    url: '/reference/actions',
                }, {
                    label: 'Filters',
                    url: '/reference/filters',
                }, {
                    label: 'Functions',
                    url: '/reference/functions',
                }],
            }, {
                label: 'Ecosystem',
                children: [{
                    label: 'Webpack',
                    url: '/ecosystem/webpack',
                }, {
                    label: 'Vue.js',
                    url: '/ecosystem/vuejs',
                }],
            }]
        }, {
            label: 'Flickerbox Fabric',
            url: 'https://fabric.flickerbox.com/',
        }],

        sidebar: {
            '/getting-started/': [{
                title: 'Getting Started',
                children: [
                    '',
                    'installation',
                    'configuration',
                    'directory-structure',
                ],
            }],
            '/themes/': [{
                title: 'Themes',
                children: [
                    '',
                    'colors',
                    'fonts',
                    'page-types',
                    'post-types',
                    'header',
                    'footer',
                    'media',
                    'nav',
                    'logo',
                    'glitter',

                ],
            }],
            '/block-types/': [{
                title: 'Block Types',
                children: [
                    '',
                    'interface',
                    'provider',
                    'schema',
                ],
            }],
            '/field-types/': [{
                title: 'Field Types',
                children: [
                    '',
                    'provider',
                    'schema',
                ],
            }],
            '/api/': [{
                title: 'API',
                children: [
                    '',
                ],
            }],
            '/faq/': [{
                title: 'FAQ',
                children: [
                    '',
                ],
            }],
        },

        sidebarDepth: 2,

    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    precision: 10,
                                },
                            },
                        },
                        {
                            loader: 'import-glob-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            alias: {
                'fabric': require('@flickerbox/fabric/webpack.manifest').sassDir,
                '@public': path.resolve('docs/.vuepress/public'),
            },
        },
    },

    chainWebpack: ( config, isSever ) => {

        config.module.rule('svg')
            .use('file-loader')
                .loader('vue-svg-loader')
                .options({
                    svgo: {
                        plugins: [
                            { mergePaths: false },
                            { removeViewBox: false },
                        ],
                    },
                })

    },

    plugins: [
        [
            'vuepress-plugin-container',
            {
                type: 'note',
                before: ( title ) => `<div class="Note"><div class="Note-title">${title}</div>`,
                after: '</div>',
            },
        ],
    ],
}
