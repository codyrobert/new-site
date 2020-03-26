/**
 * External dependencies
 */

import _ from 'lodash'


/*
 * Directive instances
 */
const instances = []

/*
 * Attach listeners
 */

if ( 'undefined' !== typeof window ) {
	
	window.addEventListener('scroll', onScroll)
	window.addEventListener('resize', onScroll)
	window.addEventListener('orientationchange', onScroll)

}

/*
 * Scroll class
 */
class Scroll {

	constructor( el, binding, vnode ) {

		this.binding = binding


	}

	update( el, binding, vnode ) {

		this.binding = binding

	}

	destroy() {

	}

}


/*
 * Directive functions
 */

function onScroll() {

	_.each(instances, ( instance ) => {
		if ( 'function' === typeof instance.binding.value ) {
			instance.binding.value()
		}
	})

}

function bind( el, binding, vnode ) {

	instances.push(new Scroll(el, binding, vnode))
	el.dataset.scroll = instances.length - 1

}

function unbind( el, binding, vnode ) {

	if( el.dataset.scroll < instances.length ) {
		instances[el.dataset.scroll].destroy()
	}

}

function update( el, binding, vnode ) {

	if( el.dataset.scroll < instances.length ) {
		instances[el.dataset.scroll].update(el, binding, vnode)
	}

}

/*
 * Default export
 */

export default {

	bind,

	unbind,

	update,

}
