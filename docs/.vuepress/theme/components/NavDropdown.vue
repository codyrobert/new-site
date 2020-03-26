<template>
	<div :class="{ 'Dropdown': true }">

		<ul>
			<li v-for="(item, index) of items" :key="index">
				<NavLink v-bind="item"/>
				<NavLinks v-if="item.children && item.children.length" :items="item.children"/>
			</li>
		</ul>

	</div>
</template>

<script>
import NavLink from './NavLink'
import NavLinks from './NavLinks'

export default {

	name: 'NavDropdown',

	components: {
		NavLink,
		NavLinks,
	},

	props: {

		items: {
			type: Array,
			default: () => [],
		},

	},

}
</script>
