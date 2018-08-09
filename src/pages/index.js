import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from 'react-helmet'
import path from 'path'

let p = path.resolve("./ui.jpg")
const IndexPage = () => (
  <div>
    <Helmet>
      <title>Blogsssss</title>
      <meta name="copyright" content="Copyright by RedCarpet Tech Pvt Ltd. All Rights Reserved." />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@RedcarpetUp" />
					<meta name="twitter:title" content="Redsa"/>
					<meta name="twitter:description" content="RedCarpet helps you buy any product from any site and pay back in installments! With RedCarpet you will:
✓ Never miss a deal from from any online site, due to lack of funds
✓ Save your cash for other uses
✓ Increase the buying power of your pocket money
✓ Be able to buy an expensive product, without having to worry about paying it upfront." />
				  <meta name="twitter:image" content={p} />

      </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
