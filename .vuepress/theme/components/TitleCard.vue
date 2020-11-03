<template>
    <div class="TitleCard" v-scroll="onScroll">
        <div class="Wrap">

            <Logo ref="logo" :class="{ 'is-hidden': logoIsHidden }" :style="logoStyle"/>
            <p ref="subtitle" class="TitleCard-subtitle" :style="subtitleStyle">I'm a full stack engineer with streamlined and thoughtful approaches to development.</p>

        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { Cubic } from 'easing-functions'
import Scroll from '@theme/directives/scroll'
import LogoData from '@theme/data/logo'
import UiData from '@theme/data/ui'
import Logo from '@theme/components/Logo'

export default {

    name: 'TitleCard',

    components: {
        Logo,
    },

    directives: {
        Scroll,
    },

    computed: {

        logoIsHidden() {
            return ( 0 === LogoData.percent )
        },

        logoStyle() {
            return {
                height: '200px',
                maxHeight: 'calc(25vw - 20px)',
                maxWidth: 'calc(100vw - 80px)',
                width: '800px',
                transform: `scale(${0.2 + 0.8 * LogoData.percent})`,
            }
        },

        subtitlePercent() {
            const percent = LogoData.endPercent + ( ( this.subtitleTop - LogoData.endPx ) / UiData.windowHeight ) / LogoData.startPercent
            return Cubic.Out(_.max([_.min([percent, 1]), 0]))
        },

        subtitleStyle() {
            return {
                opacity: this.subtitlePercent,
            }
        },

    },

    methods: {

        onScroll() {

            let logoRect = this.$refs.logo.$el.getBoundingClientRect()
            let subtitleRect = this.$refs.subtitle.getBoundingClientRect()

            LogoData.top = logoRect.top
            this.subtitleTop = subtitleRect.top

        },

    },

    data() {
        return {
            subtitleTop: 0,
        }
    },

    mounted() {

        this.onScroll()

    },

}
</script>
