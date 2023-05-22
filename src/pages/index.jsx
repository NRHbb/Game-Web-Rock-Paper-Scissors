import React from 'react'
import MainScreen from '../components/landing/MainScreen'
import Gallery from '../components/landing/Carousel'
import Features from '../components/landing/Features'
import SysReq from '../components/landing/Requirements'
import Quotes from '../components/landing/Quotes'
import Subs from '../components/landing/subs'

export default function Index () {
  return (
    <>
      {<MainScreen />}

      {<Gallery />}

      {<Features />}

      {<SysReq />}

      {<Quotes />}

      {<Subs />}
    </>
  )
}
