<template>
    <div class="Sidebar-links">
        <ul>

            <li v-for="(item, index) of items" :key="index">

                <template v-if="'group' === item.type">

                    <RouterLink
                        v-if="item.path"
                        class="Sidebar-heading"
                        :class="{ 'is-active': isActive($route, item.path) }"
                        :to="item.path"
                        @click.native="$emit('toggle')"
                    >
                        <span>{{ item.title }}</span>
                    </RouterLink>

                    <div
                        v-else
                        class="Sidebar-heading"
                        @click="$emit('toggle')"
                    >
                        <span>{{ item.title }}</span>
                    </div>

                    <SidebarLinks
                        :items="item.children"
                        :depth="depth"
                    />

                </template>

                <SidebarLink
                    v-else
                    :sidebar-depth="sidebarDepth"
                    :item="item"
                />

            </li>
        </ul>

    </div>
</template>

<script>
import SidebarLink from '@theme/components/SidebarLink'
import { isActive } from '../utilities'

export default {

    name: 'SidebarLinks',

    components: {
        SidebarLink,
    },

    props: {

        items: {
            type: Array,
            default: () => [],
        },
        depth: {
            type: Number,
            default: null,
        },
        sidebarDepth: {
            type: Number,
            default: null,
        },

    },

    watch: {

        '$route'() {
            this.refreshIndex()
        },

    },

    methods: {

        refreshIndex() {
            const index = resolveOpenGroupIndex(
                this.$route,
                this.items
            )
            if (index > -1) {
                this.openGroupIndex = index
            }
        },

        isActive( page ) {
            return isActive(this.$route, page.regularPath)
        },

    },

  data () {
    return {
      openGroupIndex: 0
    }
  },

  created () {
    this.refreshIndex()
  },
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (descendantIsActive(route, item)) {
      return i
    }
  }
  return -1
}

function descendantIsActive (route, item) {
  if (item.type === 'group') {
    return item.children.some(child => {
      if (child.type === 'group') {
        return descendantIsActive(route, child)
      } else {
        return child.type === 'page' && isActive(route, child.path)
      }
    })
  }
  return false
}
</script>
