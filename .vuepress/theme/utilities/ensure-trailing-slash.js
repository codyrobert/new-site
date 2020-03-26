export function ensureTrailingSlash( path ) {

    return /(\.html|\/)$/.test(path) && path || (path + '/')

}
