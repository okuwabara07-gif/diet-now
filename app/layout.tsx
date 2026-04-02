import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ダイエットNow',
  description: 'ダイエット・健康情報メディア',
  keywords: 'ダイエットNow,ダイエット・健康情報メディア',
  openGraph: {
    title: 'ダイエットNow',
    description: 'ダイエット・健康情報メディア',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ダイエットNow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ダイエットNow',
    description: 'ダイエット・健康情報メディア',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "ダイエットNow", "description": "ダイエット・健康情報メディア", "url": "https://diet-now.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://diet-now.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
