import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
import HeroBanner from './HeroBanner'

const FooterBanner = ({ footerBanner: {
  discount, largeText1, largeText2, saletime, smallText, midText, product, buttonText, image, logo
} }) => {
  return (
    <div className='footer-banner-container'>
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <h4>{saletime}</h4>
          </div>
          <div className="right">
            <h3>{midText}</h3>
            <img src={urlFor(logo)} alt="" className="footer-banner-img" />
          </div>
        </div>
    </div>
  )
}

export default FooterBanner