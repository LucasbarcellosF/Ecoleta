import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'


export default function Homepage() {


  return (
    <>
    <Helmet>
      <title>Ecoleta</title>
    </Helmet>
    <>
    <Navbar />
    </>
    <div class="mb-2 sm:mb-16 sm:mx-20 w-auto m-auto">
      <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 class="text-4xl leading-relaxed text-left font-bold text-teal-900 sm:text-5xl sm:leading-relaxed md:text-6xl lg:text-5xl xl:text-6xl">
              Sua <span className="text-teal-600">plataforma</span> de coleta seletiva <span className="text-teal-600">inteligente</span>
            </h2>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Encontre um ponto de coleta
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-400 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Cadastre um ponto de coleta
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img class="sm:mt-6 absolute inset-0 w-full h-full object-auto sm:object-contain" src="/assets/home-background.svg" alt="Woman on her phone" />
        </div>
        
      </main>   
    </div>
    <>
    <Footer />
    </>
    </>

  )
}