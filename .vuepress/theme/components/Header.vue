<template>
    <header :class="{
        'Header': true,
        'is-hidden': isHidden,
    }">
        <div class="Wrap">

            <Logo/>

        </div>
    </header>
</template>

<script>
import LogoData from '@theme/data/logo'
import UIData from '@theme/data/ui'
import Logo from '@theme/components/Logo'

export default {

    name: 'Header',

    components: {
        Logo,
    },

    computed: {

        isHidden() {
            return (
                ( 0 !== LogoData.percent ) ||
                (120 + UIData.scrollTop > UIData.windowHeight)
            )
        },

    },

}
</script>
