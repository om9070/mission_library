'use client'
import React, { useState } from 'react'
import ProductList from './ProductList'
import { machine, product } from '@/Helper/product'

export default function Product() {


  return (
    <>
      <section>
        <div class=" w-full py-24 bg-orange-200">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl ">
              <div>
                <img class="object-cover object-center mx-auto rounded-lg h-[580px]" alt="hero"
                  src="/card.jpeg" />
              </div>
            </div>
            <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Vikash Kumar </span>
              <p class="mb-12 text-base leading-relaxed text-gray-500">Mission Library offers a peaceful and disciplined environment for self-study, complete with 24×7 open study halls, weekly mock-tests, competitive exam books, and high-speed Wi-Fi. With CCTV surveillance, RO water, daily newspapers, magazines, and personal study cabins, Mission Library ensures a perfect atmosphere for focused learning. Free registration is available for the first 20 students!</p>
              <a class="inline-flex items-center w-full mb-4">
                <img alt="blog" src="/avatar.jpeg"
                  class="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                <span class="flex flex-col flex-grow pl-3">
                  <h2 class="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                    <span href="#" class="font-semibold text-gray-500 lg:mb-0">vikash's HR </span>
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
