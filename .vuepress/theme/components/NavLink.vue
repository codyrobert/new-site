<template>

    <span
        v-if="!isLink"
        :class="{ 'has-children': hasChildren }"
    >
        {{ label }}
    </span>

    <RouterLink
        v-else-if="isInternal"
        :class="{ 'has-children': hasChildren }"
        :to="normalizedUrl"
        :exact="isExact"
    >
        {{ label }}
    </RouterLink>

    <a
        v-else
        :class="{ 'is-external': true, 'has-children': hasChildren }"
        :href="normalizedUrl"
        :target="normalizedTarget"
        :rel="normalizedRel"
    >
        {{ label }}
        <i class="fad fa-external-link"/>
    </a>
</template>

<script>
import {
    isExternal,
    isMailto,
    isTel,
    normalizeUrl,
} from '../utilities'

export default {

    name: 'NavLink',

    props: {

        url: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: null,
        },
        rel: {
            type: String,
            default: null,
        },
        target: {
            type: String,
            default: null,
        },
        children: {
            type: Array,
            default: () => [],
        },

    },

    computed: {

        hasChildren() {
            return ( this.children && this.children.length )
        },

        isBlankTarget() {
            return ( '_blank' === this.target )
        },

        isExact() {

            if ( this.$site.locales ) {
                return Object.keys(this.$site.locales).some(( rootUrl ) => rootUrl === this.url)
            }

            return ( '/' === this.url )

        },

        isHttp() {
            return ( !isMailto(this.url) && !isTel(this.url) )
        },

        isInternal() {
            return ( !isExternal(this.url) && !this.isBlankTarget )
        },

        isLink() {
            return !!this.url
        },

        normalizedRel() {

            if ( !this.isHttp ) {
                return null
            }

            if ( this.rel ) {
                return this.rel
            }

            return this.isBlankTarget && 'noopener noreferrer' || null

        },

        normalizedTarget() {

            if ( !this.isHttpURI ) {
                return null
            }

            if ( this.target ) {
                return this.target
            }

            return isExternal(this.url) && '_blank' || null

        },

        normalizedUrl() {
            return normalizeUrl(this.url)
        },

    },

}
</script>
