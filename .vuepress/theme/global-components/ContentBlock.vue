<template>
    <div class="ContentBlock" :style="style">
        <slot/>
    </div>
</template>

<script>
export default {

    name: 'ContentBlock',

    props: {
        width: {
            type: [Number, String],
            default: null,
        },
    },

    computed: {
        style() {
            if ( this.width ) {
                return `max-width:${this.width}px;`
            }
        }
    },

}
</script>
