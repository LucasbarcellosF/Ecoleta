import React from 'react'
import Navbar from './navbar.js'

export default function SearchResults() {

  return (
    <div id="page-search-results">

    <Navbar />    
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
  )
}