import _ from 'lodash'
import { extensionRegex, hashRegex } from './constants'

export function normalizePath( path ) {

    path = _.toString(path)

    return decodeURI(path)
        .replace(hashRegex, '')
        .replace(extensionRegex, '')

}
