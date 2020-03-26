<template>
    <nav class="Header-nav">
        <ul>
            <li v-for="(item, index) of items" :key="index">

                <NavLink v-bind="item"/>

                <NavDropdown
                    v-if="item.children && item.children.length"
                    :items="item.children"
                />

            </li>
        </ul>
    </nav>
</template>

<script>
import NavDropdown from './NavDropdown'
import NavLink from './NavLink'

export default {

    name: 'Nav',

    components: {
        NavDropdown,
        NavLink,
    },

    computed: {

        items() {
            return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
        },

    },

}
</script>
