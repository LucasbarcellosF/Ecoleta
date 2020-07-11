import React from 'react'
import Navbar from './navbar'
import Footer from './footer'


export default function CreatePoint() {

  return (
    <div className="">
    <>
    <Navbar />
    </>
    <div class="my-12 mx-8 flex w-auto">
      <form className="m-auto w-auto h-auto">
        <div className="flex justify-center">
          <div className="justify-center">
            <h1 className="font-bold text-5xl text-teal-900 text-center">Cadastrar ponto de coleta</h1>
            <p className="text-md font-medium text-teal-700 text-center">Precisamos de algumas informações sobre a entidade</p>
          </div>
        </div>

        <fieldset className="bg-gray-100 overflow-hidden my-4 shadow border border-teal-500 rounded-lg p-8">
          <legend>
            <h2 className="font-bold text-2xl text-teal-800">Dados da entidade</h2>
          </legend>

          <div class="">
            <label className="font-medium" for="">Nome da entidade</label>
            <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />          
          </div>

          <div class="my-2">
            <div class="">
              <label className="font-medium" for="address">Endereço</label>
              <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" /> 
            </div>
            <div class="my-2">
              <label className="font-medium" for="address-number">Número</label>
              <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" /> 
            </div>
          </div>
          
          <div class="grid grid-rows-2 row-gap-4">

            <div class="row-span-1">
              <label className="font-medium" for="address-state">Estado</label>
              <select class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:shadow-outline-teal focus:border-teal-300 focus:rounded-lg sm:text-sm sm:leading-5">
                <option value="">Selecione o estado</option>
              </select>
              <input type="hidden" name="state" />
            </div>

            <div class="row-span-1">
              <label className="font-medium" for="address-city">Cidade</label>
              <select class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:shadow-outline-teal focus:border-teal-300 sm:text-sm sm:leading-5">                
                <option>Selecione a cidade</option>
              </select>
            </div>

          </div>

        </fieldset>
        
        <fieldset className=" bg-gray-100 overflow-hidden my-4 shadow border border-teal-500 rounded-lg p-4 py-12">
          <legend>
            <h2 className="font-bold text-2xl text-teal-800">Itens de Coleta</h2>
          </legend>
          <div className="flex justify-center text-teal-700 text-center">
            <p classsName="">Selecione os items que serão coletados pela entidade</p>
          </div>

          <div class=" flex overflow-hidden list-none w-auto h-auto p-4">
            <div className="grid sm:grid-cols-3 col-gap-4 row-gap-4 justify-center text-center" >

                <li className="bg-white cursor-pointer shadow rounded-lg justify-center hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/lampadas.svg" alt="Lâmpadas" />
                  <span>Lâmpadas</span>
                </li>

                <li className="bg-white cursor-pointer shadow rounded-lg justify-center hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/baterias.svg" alt="Pilhas e Baterias" />
                  <span>Pilhas e Baterias</span>
                </li>

                <li className="bg-white cursor-pointer shadow rounded-lg justify-center hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/papeis-papelao.svg" alt="Papéis e Papelão" />
                  <span>Papéis e Papelão</span>
                </li>

                <li className="bg-white cursor-pointer shadow rounded-lg justify-center hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/eletronicos.svg" alt="Resíduos Eletrônicos" />
                  <span>Resíduos Eletrônicos</span>
                </li>

                <li className="bg-white cursor-pointer shadow rounded-lg justify-center hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/organicos.svg" alt="Resíduos Orgânicos" />
                  <span>Resíduos Orgânicos</span>
                </li>

                <li className="bg-white cursor-pointer shadow rounded-lg justify-cente hover:bg-teal-100 focus:outline-none m-auto p-4 w-auto h-auto" style={{Height: '200px', width: '200px', maxHeight: '200px', maxWidth: '200px'}}>
                  <img className="m-auto" src="/assets/oleo.svg" alt="Óleo de cozinha" />
                  <span>Óleo de cozinha</span>
                </li>

            </div>
          </div>
          <input type="hidden" name="items"></input>
        </fieldset>
        <div className="flex w-full mt-6 ">
        <button type="button" class="m-auto px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-800 bg-gray-400 hover:bg-teal-300 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition ease-in-out duration-150">
          Limpar
        </button>
        <button type="submit" class="m-auto px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-800 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-300">
          Cadastrar
        </button>      
        </div>
      </form>

    </div>
    <>
    <Footer />
    </>
    </div>

  )
}