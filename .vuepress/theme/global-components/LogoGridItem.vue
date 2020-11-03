<template>
    <a class="LogoGrid-item" :href="to" target="_blank">
        <img :src="logo">
    </a>
</template>

<script>
export default {

    name: 'LogoGridItem',

    props: {
        logo: {
            type: String,
            default: null,
        },
        to: {
            type: String,
            default: null,
        },
    },

}
</script>
