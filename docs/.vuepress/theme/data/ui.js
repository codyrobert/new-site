/*
 * External dependencies
 */

import Vue from 'vue'

/*
 * UI data
 */

const UI = new Vue({
    data: {
        scrollTop: null,
        windowHeight: null,
        windowWidth: null,
    },
})

function onResize() {
    UI.windowHeight = window.innerHeight
    UI.windowWidth = window.innerWidth
}

function onScroll() {
    UI.scrollTop = window.scrollY
}

if ( 'undefined' !== typeof window ) {
    
    window.addEventListener('orientationchange', onResize)
    window.addEventListener('resize', onResize)

    window.addEventListener('orientationchange', onScroll)
    window.addEventListener('scroll', onScroll)

    onResize()
    onScroll()

}

/*
 * Export
 */

export default UI
