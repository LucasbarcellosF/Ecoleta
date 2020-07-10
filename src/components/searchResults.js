import React from 'react'
import Navbar from './navbar'
import Footer from './footer'



export default function SearchResults() {

  return (
    <div>
    <>
    <Navbar />    
    </>

    <div class="my-12 mx-8 w-auto">
      <div className="my-6 flex justify-center">
        <h4 className="text-5xl font-bold text-teal-900">Pontos de coleta encontrados</h4>
      </div>

      <div className="flex justify-center ">

        <div className="grid grid-rows col-gap-8 row-gap-6 sm:grid-cols-6">

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="border w-auto h-auto" src="/assets/Colectoria.png" alt="Colectoria" />
            <h1 className="text-lg font-bold text-teal-800">Colectoria</h1>
            <h3 className="text-md font-medium text-teal-700">Resíduos Eletrônicos, Lâmpadas</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="border w-auto h-auto" src="/assets/Colectoria.png" alt="Colectoria" />
            <h1 className="text-lg font-bold text-teal-800">Colectoria</h1>
            <h3 className="text-md font-medium text-teal-700">Resíduos Eletrônicos, Lâmpadas</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="w-auto h-auto" src="/assets/Colectoria.png" alt="Colectoria" />
            <h1 className="text-lg font-bold text-teal-800">Colectoria</h1>
            <h3 className="text-md font-medium text-teal-700">Resíduos Eletrônicos, Lâmpadas</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="w-auto h-auto" src="/assets/Papersider.png" alt="Papersider" />
            <h1 className="text-lg font-bold text-teal-800">Papersider</h1>
            <h3 className="text-md font-medium text-teal-700">Papéis e Papelão</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="w-auto h-auto" src="/assets/Colectoria.png" alt="Colectoria" />
            <h1 className="text-lg font-bold text-teal-800">Colectoria</h1>
            <h3 className="text-md font-medium text-teal-700">Resíduos Eletrônicos, Lâmpadas</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-100 col-span-2">
            <img className="w-auto h-auto" src="/assets/Colectoria.png" alt="Colectoria" />
            <h1 className="text-lg font-bold text-teal-800">Colectoria</h1>
            <h3 className="text-md font-medium text-teal-700">Resíduos Eletrônicos, Lâmpadas</h3>
            <p className="text-sm font-medium text-teal-700">
              Rio do Sul, Santa Catarina <br/>
              Guilherme Gemballa, Jardim América <br/>
              Nº 260
            </p>
          </div>

        </div> 
             
      </div>

    </div>
  <>
  <Footer />
  </>
  </div>
  )
}