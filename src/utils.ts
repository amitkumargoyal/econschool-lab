// Prefix a site-internal path with the configured base URL,
// so links work both on GitHub Pages (/econschool-lab/...) and
// later on a custom domain (base '/').
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
