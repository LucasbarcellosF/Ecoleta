import React from 'react'
import Navbar from './navbar'
import Footer from './footer'



export default function SearchResults() {

  return (
    <div>
    <>
    <Navbar />    
    </>

    <div >

    <main>
      <h4>
        <strong>2 pontos</strong> encontrados
      </h4>

      <div class="cards">
        <div class="card">
          <img src="/assets/Colectoria.png" alt="Colectoria" />
          <h1>Colectoria</h1>
          <h3>Resíduos Eletrônicos, Lâmpadas</h3>
          <p>
            Rio do Sul, Santa Catarina <br/>
            Guilherme Gemballa, Jardim América <br/>
            Nº 260
          </p>
        </div>

        <div class="card">
          <img src="/assets/Papersider.png" alt="Papersider" />
          <h1>Papersider</h1>
          <h3>Papéis e Papelão</h3>
          <p>
            Rio do Sul, Santa Catarina <br/>
            Guilherme Gemballa, Jardim América <br/>
            Nº 260
          </p>
        </div>

      </div>
    </main>
  </div>
  <>
  <Footer />
  </>
  </div>
  )
}