import React from 'react'
import Navbar from './navbar'
import Footer from './footer'


export default function Contact() {

  return (
    <div>
    <>
    <Navbar />
    </>
    <div class="mx-6 my-6 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl leading-9 font-bold tracking-tight text-teal-900 sm:text-5xl sm:leading-10">
            Fale Conosco
          </h2>
          <p class="mt-4 text-lg font-medium leading-6 text-teal-800">
            Parcerias? Entre em contato com a gente!
          </p>
        </div>

        <div class="mt-12 shadow border p-6 rounded-lg bg-gray-100 overflow-hidden">
          <form action="#" method="POST" class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">

            <div>
              <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">Nome</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div>
              <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Sobrenome</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="last_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
            
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-medium leading-5 text-gray-700">Empresa</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="company" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">E-mail</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="email" type="email" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="phone_number" class="block text-sm font-medium leading-5 text-gray-700">Telefone de contato</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">

                </div>
                <input id="phone_number" class="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150" placeholder="+1 (555) 987-6543" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium leading-5 text-gray-700">Message</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <textarea id="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="flex items-start">

                <div class="flex-shrink-0">
                  <span role="checkbox" tabindex="0" aria-checked="false" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
                    <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
                  </span>
                </div>

                <div class="ml-3">
                  <p class="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the
                    <a href="#" class="font-medium text-gray-700 underline">Privacy Policy</a>
                    and
                    <a href="#" class="font-medium text-gray-700 underline">Cookie Policy</a>.
                  </p>
                </div>

              </div>
            </div>

            <div class="sm:col-span-2">
              <span class="w-full inline-flex rounded-md shadow-sm">
                <button type="button" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                  Let's talk
                </button>
              </span>
            </div>

          </form>
        </div>
      </div>
    </div>
    <>
    <Footer />
    </>
    </div>
  )
}