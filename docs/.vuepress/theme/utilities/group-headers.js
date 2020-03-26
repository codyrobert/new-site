export function groupHeaders( headers ) {

    // group h3s under h2
    headers = headers.map(h => Object.assign({}, h))
    let lastH2
    headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
    })

    return headers.filter(h => h.level === 2)

}
