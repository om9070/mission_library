import React from 'react'
import LandingPage from '../_component/LandingPage'
import About from '../_component/about_section/About'
import Servicelucation from '../_component/service_lucation/Servicelucation'

export default function page() {
  return (
    <>
    <LandingPage pageName={"About us"}/>
    <About/>
    <Servicelucation/>
    </>
  )
}
