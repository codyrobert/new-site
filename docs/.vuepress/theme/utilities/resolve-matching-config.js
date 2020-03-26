import { ensureTrailingSlash } from './ensure-trailing-slash'

export function resolveMatchingConfig( regularPath, config ) {

    if ( _.isArray(config) ) {
        return {
            base: '/',
            config,
        }
    }

    for ( const base in config ) {
        if ( 0 === ensureTrailingSlash(regularPath).indexOf(encodeURI(base)) ) {
            return {
                base,
                config: config[base],
            }
        }
    }

    return {}

}
