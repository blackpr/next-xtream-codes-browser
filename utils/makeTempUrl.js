export default function makeTempUrl(url) {
  return `/api/fetch?url=${encodeURIComponent(url)}`
}
