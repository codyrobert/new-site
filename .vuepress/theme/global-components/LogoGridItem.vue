<template>
    <div class="LogoGrid-item">
        <img :src="src">
    </div>
</template>

<script>
export default {

    name: 'LogoGridItem',

    props: {
        src: {
            type: String,
            default: null,
        },
    },

}
</script>
