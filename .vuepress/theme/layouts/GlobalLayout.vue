<template>
    <div class="Page">

        <Header/>
        <TitleCard/>
        <component :is="layout"/>

    </div>
</template>

<style lang="scss">
@import '../styles/master';
</style>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'
import Header from '@theme/components/Header'
import TitleCard from '@theme/components/TitleCard'

export default {

    name: 'GlobalLayout',

    components: {
        Header,
        TitleCard,
    },

    computed: {

        layout() {

            const layout = this.getLayout()
            setGlobalInfo('layout', layout)
            return Vue.component(layout)

        },

    },

    methods: {

        getLayout() {

            if (this.$page.path) {

                const layout = this.$page.frontmatter.layout

                if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {
                    return layout
                }

                return 'Layout'
            }

            return 'NotFound'

        },

    }
}
</script>
