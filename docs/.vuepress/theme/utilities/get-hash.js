import { hashRegex } from './constants'

export function getHash( path ) {

    const match = path.match(hashRegex)
    return match && match[0] || ''

}
