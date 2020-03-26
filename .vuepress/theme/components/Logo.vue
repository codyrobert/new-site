<template>
    <router-link class="Logo" to="/">

        <LogoSvg/>

    </router-link>
</template>

<script>
import LogoSvg from '@theme/images/logo.svg'

export default {

    name: 'Logo',

    components: {
        LogoSvg,
    },

}
</script>
