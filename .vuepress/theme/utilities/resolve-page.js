import { isExternal } from './is-external'
import { normalizePath } from './normalize-path'
import { normalizeUrl } from './normalize-url'
import { resolvePath } from './resolve-path'

export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalizePath(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalizePath(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: normalizeUrl(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}
