import { Head, Html, Main, NextScript } from 'next/document'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <meta name="description" content={sohujiCopy.meta.description} />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='ai,llm,agentic,rag,n8n,automation,mcp,observability,software,sohuji' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/icon.svg" />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
