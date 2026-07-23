/**
 * GitHub Pages serves project sites from https://<user>.github.io/<repo>,
 * so every asset URL needs that prefix. The deploy workflow sets
 * NEXT_PUBLIC_BASE_PATH; local dev leaves it empty and serves from root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
