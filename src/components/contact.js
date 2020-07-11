import React from 'react'
import Navbar from './navbar'
import Footer from './footer'


export default function Contact() {

  return (
    <div>
    <>
    <Navbar />
    </>
    <div class="mx-6 my-6 overflow-hidden sm:px-6 lg:px-8 sm:mt-8">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl leading-9 font-bold tracking-tight text-teal-900 sm:text-5xl sm:leading-10">
            Fale Conosco
          </h2>
          <p class="mt-8 text-lg font-medium leading-6 text-teal-800">
            Parcerias? Entre em contato com a gente!
          </p>
        </div>

        <div class="mt-6 shadow border p-6 rounded-lg bg-gray-100 overflow-hidden">
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
                <input  id="phone_number" placeholder="(xx) xxxxxxxxx" class="form-input block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium leading-5 text-gray-700">Mensagem</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <textarea id="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150 rounded-lg overflow-hidden resize-none"></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <span class="w-full inline-flex rounded-md shadow-sm">
                <button type="button" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-lg">
                  Enviar
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