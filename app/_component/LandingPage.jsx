import React from 'react'

export default function LandingPage({ pageName }) {
     return (
          <section>
               <div className='landing'>
                    <h1 className='text-5xl font-bold text-amber-900'>Mission Library - {pageName}</h1>
               </div>
          </section>
     )
}
