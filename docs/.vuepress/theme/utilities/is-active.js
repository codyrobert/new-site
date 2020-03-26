import { getHash } from './get-hash'
import { normalizePath } from './normalize-path'

export function isActive( route, path ) {

    const routeHash = decodeURIComponent(route.hash)
    const linkHash = getHash(path)

    if (linkHash && routeHash !== linkHash) {
        return false
    }

    const routePath = normalizePath(route.path)
    const pagePath = normalizePath(path)

    return ( routePath === pagePath )

}
