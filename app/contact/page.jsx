import React from 'react'
import Map from '../_component/map_section/Map'
import Social from '../_component/social_media_section/Social'
import LandingPage from '../_component/LandingPage'

export default function page() {
  return (
    <>
    <LandingPage pageName={"Contact page"}/>
    <Social/>
    <Map/>
    </>
  )
}
