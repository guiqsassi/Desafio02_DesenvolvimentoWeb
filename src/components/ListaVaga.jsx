import React from "react";

const ListaVaga = ({vaga, index, removerVaga})=>{
   
   

   
   
   
    return(
            <li key={index} className="vaga-card">
              <p><strong>Placa:</strong> {vaga.placa}</p>
              <p><strong>Proprietário:</strong> {vaga.proprietario}</p>
              <p><strong>Apartamento:</strong> {vaga.numeroApartamento} - Bloco {vaga.blocoApartamento}</p>
              <p><strong>Veículo:</strong> {vaga.modelo} - {vaga.cor}</p>
              <p><strong>Vaga nº:</strong> {vaga.vaga}</p>
              <button className="btn-remover" onClick={() => removerVaga(index)}>
                Remover
              </button>
            </li>
    )
}

export default ListaVaga;