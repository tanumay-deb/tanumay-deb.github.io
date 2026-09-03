/**
 * Analytics. Both providers are optional and independent — set either, both,
 * or neither. With nothing set the site ships with no tracking at all.
 *
 * Configured through repository variables (Settings → Secrets and variables →
 * Actions → Variables), which the deploy workflow passes to the build:
 *   UMAMI_WEBSITE_ID  → NEXT_PUBLIC_UMAMI_ID   (cookieless, no consent banner)
 *   GA_MEASUREMENT_ID → NEXT_PUBLIC_GA_ID      (G-XXXXXXXXXX, sets cookies)
 *
 * Plain script tags rather than next/script: on a static export the deferred
 * strategies inject client-side and never appear in the exported HTML, which
 * makes them hard to verify and easy to break silently.
 *
 * Résumé downloads are captured by both without extra code — Umami through the
 * data-umami-event attribute on the link, GA4 through its built-in file
 * download tracking.
 */
export default function Analytics() {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC || 'https://cloud.umami.is/script.js'
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <>
      {umamiId ? <script defer src={umamiSrc} data-website-id={umamiId} /> : null}

      {gaId ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`,
            }}
          />
        </>
      ) : null}
    </>
  )
}
