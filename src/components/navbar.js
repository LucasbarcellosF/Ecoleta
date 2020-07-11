import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [ menuDropdownState, setMenuDropdownState ] = useState(false)
  const [profileDropdownState, setProfileDropdownState] = useState(false);

  return (

    <div className="bg-gray-100 ">
      <nav class="shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={(e) => setMenuDropdownState(!menuDropdownState)} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-teal-800 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <svg className={`${menuDropdownState ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg className={`${menuDropdownState ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <Link to='/'>
                <img class="block lg:hidden h-8 w-auto" src="/assets/logo.svg" alt="Ecoleta logo" />
                <img class="hidden lg:block h-8 w-auto" src="/assets/logo.svg" alt="Ecoleta logo" /> 
                </Link>
              </div>
              <div class="hidden sm:ml-6 sm:flex">
                <a href="/create-point" class="inline-flex items-center px-1 pt-1 text-md font-medium leading-5 text-teal-800 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                  Cadastre um ponto
                </a>
                <a href="/search-results" class="ml-8 inline-flex items-center px-1 pt-1  text-md font-medium leading-5 text-teal-800 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                  Pontos de coleta
                </a>
                <a href="/about" class="ml-8 inline-flex items-center px-1 pt-1 text-md font-medium leading-5 text-teal-800 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                  Quem somos
                </a>
                <a href="/contact" class="ml-8 inline-flex items-center px-1 pt-1  text-md font-medium leading-5 text-teal-800 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                  Parcerias
                </a>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">
              <div class="ml-3 relative">
                <div>
                  <button onClick={(e) => setProfileDropdownState(!profileDropdownState)}  class="flex text-sm rounded-full focus:outline-none transition duration-150 ease-in-out z-50" id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img class="h-10 w-auto rounded-full bg-gray-300" src="https://api.iconify.design/entypo:user.svg" alt="" />
                  </button>
                </div>
                <div className={`${profileDropdownState ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}>
                  <div class="py-1 rounded-md bg-white shadow-xs cursor-pointer" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <Link to="/profile" onClick={(e) => {setProfileDropdownState()}} class=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-teal-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Perfil</Link>
                    <Link to="/settings" onClick={(e) => {setProfileDropdownState()}} class="cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-teal-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " role="menuitem">Configurações</Link>
                    <Link to="#" onClick={(e) => {setProfileDropdownState(false)}} class="cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-teal-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Desconectar</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${menuDropdownState ? 'block' : 'hidden'} md:hidden`}>
          <div class="pt-2 pb-4">
            <a href="/create-point" class="block pl-3 pr-4 py-2 text-base font-medium text-teal-900 bg-teal-50 hover:bg-teal-300 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out">Cadastre um ponto</a>
            <a href="/search-results" class="mt-1 block pl-3 pr-4 py-2 text-base font-medium text-teal-900 bg-teal-50 hover:bg-teal-300 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out">Encontre um ponto</a>
            <a href="/contact" class="mt-1 block pl-3 pr-4 py-2 text-base font-medium text-teal-900 bg-teal-50 hover:bg-teal-300 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out">Parcerias</a>
            <a href="/about" class="mt-1 block pl-3 pr-4 py-2 text-base font-medium text-teal-900 bg-teal-50 hover:bg-teal-300 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out">Quem somos</a>
          </div>
        </div>
      </nav>    
    </div>

  )
}


