import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Communications Associate</title>
        <meta property="og:title" content="Investor Communications Associate" />
      </Helmet>
    </div>
  )
}

export default Home
