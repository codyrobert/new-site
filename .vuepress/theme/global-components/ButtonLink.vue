<template>
    <a class="Button" :href="to" target="_blank">
        <slot/>
    </a>
</template>

<script>
export default {

    name: 'ButtonLink',

    props: {
        to: {
            type: String,
            default: null,
        },
    },

}
</script>
