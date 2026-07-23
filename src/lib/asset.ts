/**
 * Plain <a href="/file.pdf"> is not rewritten by Next's basePath, only next/link
 * and next/image are. Anything in public/ that a raw anchor points at goes through here.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function asset(path: string) {
  return `${basePath}${path}`
}
