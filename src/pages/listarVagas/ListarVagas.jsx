import React, { useState, useEffect } from "react";
import "./ListarVagas.css";
import ListaVaga from "../../components/ListaVaga";

const ListarVagas = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("vagas")) || [];
    setVagas(dadosSalvos);
  }, []);

  const removerVaga = (index) => {

    const dadosSalvos = JSON.parse(localStorage.getItem("vagas")) || [];

    const novasVagas = dadosSalvos.filter((_, i) => i !== index);
    setVagas(novasVagas);
    localStorage.setItem("vagas", JSON.stringify(novasVagas));
  };


  return (
    <div className="lista-container">
      <h1>Vagas Cadastradas</h1>
      {vagas.length === 0 ? (
        <p>Nenhuma vaga cadastrada.</p>
      ) : (
        <ul className="lista-vagas">
          {vagas.map((vaga, index) => (
            <ListaVaga vaga={vaga} index={index} removerVaga={removerVaga}></ListaVaga>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListarVagas;
