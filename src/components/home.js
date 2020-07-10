import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import Background from '../img/background.jpg'

export default function Homepage() {


  return (
    <>
    <Helmet>
      <title>Ecoleta</title>
    </Helmet>
    <>
    <Navbar />
    </>
    <div class="my-10 mx-12 max-w-screen-4xl">
      <div class="flex">
        <div className="grid sm:grid-cols-4 items-center inset-x-0">
          <div className="z-20 col-span-2 items-center justify-center">

            <div className="grid grid-rows-2 m-auto inset-y-0 items-center">

              <div className="self-start row-span-1 justify-center text-left font-bold text-4xl sm:text-6xl whitespace-normal">
                <h1 className="text-teal-900">Sua plataforma de coleta seletiva inteligênte</h1>
              </div>

              <div className="row-span-1 grid mt-4 sm:mt-10 items-center whitespace-normal">
                <div className="justify-left">
                  <h3 className="font-medium text-md sm:text-lg text-teal-800">Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</h3>
                </div>

                <div className="mt-6 justify-start grid">
                  <button type="button" class="mt-6 inline-flex justify-right px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150">
                    Pesquisar um ponto de coleta
                  </button>
                </div>

              </div>
            </div>

          </div>

          <div className="hidden sm:flex z-0 col-span-2  items-center w-auto h-screen">
            <div className="justify-center items-center align-center">
              <img className=" w-full h-max m-auto"src="/assets/home-background.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <>
    <Footer />
    </>
    </>

  )
}