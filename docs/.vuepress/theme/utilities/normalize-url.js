import _ from 'lodash'
import { endingSlashRegex, hashRegex } from './constants'
import { isExternal } from './is-external'
import { getHash } from './get-hash'
import { normalizePath } from './normalize-path'

export function normalizeUrl( path ) {

    path = _.toString(path)

    if ( isExternal(path) ) {
        return path
    }

    const hash = getHash(path)
    const normalizedPath = normalizePath(path)

    if ( endingSlashRegex.test(normalizedPath) ) {
        return path
    }

    return `${normalizedPath}.html${hash}`

}
