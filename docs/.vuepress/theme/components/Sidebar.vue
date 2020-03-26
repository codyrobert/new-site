<template>
    <nav class="Sidebar">

        <SidebarLinks
            v-if="sidebarItems.length"
            :items="sidebarItems"
        />

    </nav>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks'
import { resolveSidebarItems } from '../utilities'

export default {

    name: 'Sidebar',

    components: {
        SidebarLinks,
    },

    computed: {

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            )
        },

    }

}
</script>
