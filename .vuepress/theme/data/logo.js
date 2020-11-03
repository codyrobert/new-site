/*
 * External dependencies
 */

import Vue from 'vue'
import { Cubic } from 'easing-functions'

/*
 * Internal dependencies
 */

import UI from './ui'

/*
 * Logo data
 */

const Logo = new Vue({

    computed: {

        endPercent() {
            return this.endPx / UI.windowHeight
        },

        percent() {
            if ( null === this.top ) {
                return 1
            }
            const percent = ( ( this.top / UI.windowHeight ) - this.endPercent ) / ( this.startPercent - this.endPercent )
            return Cubic.Out(_.max([_.min([percent, 1]), 0]))
        },

    },

    data: {
        endPx: 40,
        startPercent: 0.3,
        top: null,
    },

})

/*
 * Export
 */

export default Logo
