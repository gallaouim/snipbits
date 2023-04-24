import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/index'
import config from '../../data/SiteConfig'

const Privacy = () => (
  <Layout>
    <main>
      <Helmet title={`Privacy`} />
      <h1>
        What are cookies
      </h1>
      <p>
        As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or "break" certain elements of the sites functionality.
      </p>
      <h1>The cookies we set</h1>
      <h2>Site preference cookies</h2>
      <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
      <h2>Google Analytics cookies</h2>
      <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
For more information on Google Analytics cookies, see the official Google Analytics page.</p>
    </main>
  </Layout>

)

export default Privacy
