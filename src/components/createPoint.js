import React from 'react'
import Navbar from './navbar'



export default function CreatePoint() {

  return (
    <div id="page-create-point">
      <Navbar />
      <form action="">
        <h1>Cadastro do ponto de coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados da entidade</h2>
          </legend>          
          <div class="field">
            <label for="">Nome da entidade</label>
            <input type="text" name="nome-entidade" required />
          </div>
          <div class="field-group">
            <div class="field">
              <label for="address">Endereço</label>
              <input type="text" name="address" required />
            </div>
            <div class="field">
              <label for="address-number">Número</label>
              <input type="text" name="address-number" required />
            </div>
          </div>
          <div class="field-group">
            <div class="field">
              <label for="address-state">Estado</label>
              <select name="uf" required>
                <option value="">Selecione o estado</option>
              </select>
              <input type="hidden" name="state" />
            </div>
            <div class="field">
              <label for="address-city">Cidade</label>
              <select name="city" disabled required>
                <option value="">Selecione a cidade</option>
              </select>
            </div>
          </div>
        </fieldset>
        
        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
          </legend>

          <div class="items-grid">
            <li data-id="1">
              <img src="/assets/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>

            <li data-id="2">
              <img src="/assets/baterias.svg" alt="Pilhas e Baterias" />
              <span>Pilhas e Baterias</span>
            </li>

            <li data-id="3">
              <img src="/assets/papeis-papelao.svg" alt="Papéis e Papelão" />
              <span>Papéis e Papelão</span>
            </li>

            <li data-id="4">
              <img src="/assets/eletronicos.svg" alt="Resíduos Eletrônicos" />
              <span>Resíduos Eletrônicos</span>
            </li>

            <li data-id="5">
              <img src="/assets/organicos.svg" alt="Resíduos Orgânicos" />
              <span>Resíduos Orgânicos</span>
            </li>

            <li data-id="6">
              <img src="/assets/oleo.svg" alt="Óleo de cozinha" />
              <span>Óleo de cozinha</span>
            </li>

          </div>
          <input type="hidden" name="items"></input>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
    
  )
}