import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/index'
import config from '../../data/SiteConfig'

const Impressum = () => (
  <Layout>
    <main>
      <Helmet title={`impressum `} />
      <h1>
        Legal Disclosure
      </h1>
      <p>
        Information in accordance with Section 5 TMG
        <br />
        Maher Gallaoui
        <br />
        gellertstrasse 41
        <br />
        76185 Karlsruhe

      </p>
      <h1>
        Contact
      </h1>
      <p>
        Email : gallaouimaher@gmail.com
      </p>
      <h1>Disclaimer</h1>
      <p>

        Accountability for content
        The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        <br />
        <br />
        Accountability for links
        Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
        <br />
        <br />
        Copyright
        Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
      </p>
    </main>
  </Layout>

)

export default Impressum
