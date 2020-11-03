<template>
    <div class="ProjectCard" :class="classNames">
        
        <div class="ProjectCard-content">
            <slot/>
        </div>

        <div class="ProjectCard-primaryImage">
            <img v-if="primaryImage" :src="primaryImage">
        </div>

        <div class="ProjectCard-secondaryImage">
            <img v-if="secondaryImage" :src="secondaryImage">
        </div>

    </div>
</template>

<script>
import _ from 'lodash'
import { Cubic } from 'easing-functions'
import Scroll from '@theme/directives/scroll'

export default {

    name: 'ProjectCard',

    directives: {
        Scroll,
    },

    props: {
        align: {
            type: String,
            default: 'left',
        },
        primaryImage: {
            type: String,
            default: null,
        },
        secondaryImage: {
            type: String,
            default: null,
        },
    },

    computed: {
        classNames() {
            return [
                `is-${this.align}`
            ]
        }
    },

}
</script>
