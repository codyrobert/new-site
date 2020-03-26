const path = require('path');

module.exports = {

    title: 'Cody Robert',

    head: [
        ['script', {}, 'document.documentElement.classList.add(\'js\');'],
        ['link', { rel: 'stylesheet', href: 'https://use.typekit.net/dpb2grg.css' }],
        ['script', { crossorigin: 'anonymous', src: 'https://kit.fontawesome.com/0f924bd517.js' }],
    ],

    dest: 'docs',

    evergreen: true,

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
}
