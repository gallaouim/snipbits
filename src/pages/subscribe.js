import React from 'react'
import Helmet from 'react-helmet'
import MailChimp from '../components/MailchimpForm'

import Layout from '../layout'
import config from '../../data/SiteConfig'

const AboutPage = () => (
    <Layout>
        <main>
            <Helmet title={`subscribe | ${config.siteTitle}`} />
            <h1>Let's stay in Touch</h1>
            <h3>I'm focusing big-time on writing content for developers. Expect rich, bite-sized tutorials
                 along with career-development articles. There will be no spam and you can unsubscribe at any time.</h3>
            <MailChimp />

        </main>
    </Layout>
)

export default AboutPage
