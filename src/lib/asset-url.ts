// CDN asset URLs are served at /__l5e/... on Lovable hosting. Prefixing with the
// published site URL keeps images loading when the static export is hosted
// elsewhere (e.g. GitHub Pages), where /__l5e paths don't exist.
const ASSET_ORIGIN = "https://socialvillechurch.lovable.app";

export function assetUrl(path: string): string {
  return path.startsWith("/") ? `${ASSET_ORIGIN}${path}` : path;
}
