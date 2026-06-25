import { Head, Html, Main, NextScript } from 'next/document'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <meta name="description" content={sohujiCopy.meta.description} />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='ai,llm,agentic,rag,automation,observability,software,dokyoai' />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
