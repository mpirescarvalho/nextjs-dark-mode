import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import {
  FallbackStyles,
  MagicScriptTag,
} from '../styles/theme/inlineCssVariables';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {
    return (
      <Html>
        <Head>
          <FallbackStyles />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
