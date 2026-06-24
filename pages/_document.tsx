import { Head, Html, Main, NextScript } from 'next/document'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <meta name="description" content={sohujiCopy.meta.description} />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='ai,llm,agentic,rag,automation,observability,software,tokyoai' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
