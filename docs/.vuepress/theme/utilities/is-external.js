import { externalRegex } from './constants'

export function isExternal( path ) {

    return externalRegex.test(path)

}
