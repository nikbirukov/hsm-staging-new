/**
 * Prefixes an app-internal path with Vite's configured base.
 *
 * Vite rewrites asset URLs it can see (imports, and paths inside index.html),
 * but not string literals in component code. Anything hand-written — nav hrefs,
 * `/logos/x.png` — has to go through here, otherwise the site only works when
 * served from a domain root and 404s under a sub-path such as a GitHub Pages
 * project site.
 *
 * BASE_URL is '/' in dev and whatever `base` is set to in the build.
 */
export function url(path = '/') {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
}
