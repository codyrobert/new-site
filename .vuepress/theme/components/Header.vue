<template>
    <header :class="{ 'Header': true, 'is-hidden': isHidden }" :style="style">
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
            return ( 0 !== LogoData.percent )
        },

        style() {
            if ( 120 + UIData.scrollTop > UIData.windowHeight ) {
                return 'opacity:0;'
            }
        }

    },

}
</script>
