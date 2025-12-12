'use client'
import React, { useState } from 'react'
import ProductList from './ProductList'
import { machine, product } from '@/Helper/product'
import Image from 'next/image'

export default function Product() {


  return (
    <>
      <section>
        <div className=" w-full py-24 bg-orange-200">
          <div className="flex flex-wrap items-center justify-center mx-auto max-w-7xl">
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl ">
              <div>
                {/* <img className="object-cover object-center mx-auto rounded-lg h-[580px]" alt="hero"
                  src="/card.jpeg" /> */}

                <Image
                  src="/card.jpeg"
                  alt="hero"
                  width={800}       // required — natural width
                  height={600}      // required — natural height
                  className="object-cover object-center mx-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase my-2"> Vikash Kumar </span>
              <p className="mb-12 text-base leading-relaxed text-gray-500">Mission Library offers a peaceful and disciplined environment for self-study, complete with 24×7 open study halls, weekly mock-tests, competitive exam books, and high-speed Wi-Fi. With CCTV surveillance, RO water, daily newspapers, magazines, and personal study cabins, Mission Library ensures a perfect atmosphere for focused learning. Free registration is available for the first 20 students!</p>
              <a className="inline-flex items-center w-full mb-4">
                <img alt="blog" src="/avatar.jpeg"
                  className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                <span className="flex flex-col flex-grow pl-3">
                  <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                    <span href="#" className="font-semibold text-gray-500 lg:mb-0">vikash's HR </span>
                  </h2>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
