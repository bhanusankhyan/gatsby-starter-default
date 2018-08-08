import React from "react"
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    let head = Helmet.rewind()
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@RedcarpetUp" />
					<meta name="twitter:title" content="RedCarpet - Get Instant Credit"/>
					<meta name="twitter:description" content="RedCarpet helps you buy any product from any site and pay back in installments! With RedCarpet you will:
✓ Never miss a deal from from any online site, due to lack of funds
✓ Save your cash for other uses
✓ Increase the buying power of your pocket money
✓ Be able to buy an expensive product, without having to worry about paying it upfront." />
				  <meta name="twitter:image" content="https://media.graphcms.com/CsHErWROTUedcVjgO2kI" />
          {this.props.headComponents}
          { head.title.toComponent() }
          { head.meta.toComponent() }
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
