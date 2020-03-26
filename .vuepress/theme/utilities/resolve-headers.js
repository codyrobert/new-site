export function resolveHeaders( page ) {

    const headers = groupHeaders(page.headers || [])

    return [{
        type: 'group',
        collapsable: false,
        title: page.title,
        path: null,
        children: headers.map(h => ({
            type: 'auto',
            title: h.title,
            basePath: page.path,
            path: page.path + '#' + h.slug,
            children: h.children || []
        }))
    }]

}
