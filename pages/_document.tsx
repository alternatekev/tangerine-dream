import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentProps} from 'next/document'
import {extractCritical} from 'emotion-server'

export interface EmotionCriticalProps {
  html: string
  ids: Array<string>
  css: string
}

export default class MyDocument extends Document<EmotionCriticalProps & DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage()
    const pageProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(page.html)

    return {...pageProps, ...styles}
  }

  render() {
    
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/reset.css" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;700;800&family=Yrsa:wght@300;500;700&display=swap" rel="stylesheet" />
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{__html: this.props.css}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    )
  }
}
