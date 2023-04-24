import React from 'react'
import { Link } from 'gatsby'

import styles from './Footer.module.scss'
import config from '../../data/SiteConfig'

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a
          href={`https://twitter.com/${config.userTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={"https://www.facebook.com/SnipBits-104034681312431/?__tn__=%2Cd%2CP-R&eid=ARBFlx55lTyxgAGNlMEhoqPhz5N4qLJK1QqPLP1gPwrtyWKjrcbLqKBvi9JLT1hq1BZ6rbMk03jIfJty"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div className={styles.copyright}>

        <Link to="/privacy">
          privacy policy
        </Link>
        <Link to="/impressum">
          impressum
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
