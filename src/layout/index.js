import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta name="google-site-verification" content="SLkFUCe69ccUw8zeGyo5jezI1nYiZTg8SO8HFp_gKmE" />
    </Helmet>
    {children}
    <Footer />
  </>

)

export default MainLayout
