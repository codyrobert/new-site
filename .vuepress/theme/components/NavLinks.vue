<template>
	<ul>
		
		<li v-for="(item, index) of items" :key="index">
			<NavLink v-bind="item"/>
			<NavLinks v-if="item.children && item.children.length" :items="item.children"/>
		</li>

	</ul>
</template>

<script>
import NavLink from './NavLink'

export default {

	name: 'NavLinks',

	components: {
		NavLink,
	},

	props: {

		items: {
			type: Array,
			default: () => [],
		},

	},

}
</script>
