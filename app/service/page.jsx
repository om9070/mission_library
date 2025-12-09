import React from 'react'
// import Service from '../_component/service_section/Service'
// import Service from "../_component/service_section/Service";

// import Client from '../_component/client_section/Client'
import LandingPage from '../_component/LandingPage'  
import Feature from '../_component/feature_section/Feature'     
import Product from '../_component/product_section/Product'

export default function page() {
    return (
        <>
            <LandingPage pageName={"Our Service"} />
            {/* <Service /> */}
            <Product/>
            <Feature />
        </>
    )
}
