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
import Logo from '@theme/components/Logo'
import Nav from '@theme/components/Nav'

export default {

    name: 'Header',

    components: {
        Logo,
        Nav,
    },

    computed: {

        isHidden() {
            return ( 0 !== LogoData.percent )
        },

    },

}
</script>
