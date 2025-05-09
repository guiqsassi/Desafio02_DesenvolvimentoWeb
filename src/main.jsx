import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarVagas from './pages/cadastrarVagas/CadastrarVagas.jsx';
import ListarVagas from './pages/listarVagas/ListarVagas.jsx';



const vagasIniciais = [
  {
    placa: "ABC1234",
    proprietario: "João Silva",
    numeroApartamento: "101",
    blocoApartamento: "A",
    modelo: "Corolla",
    cor: "Prata",
    vaga: "12"
  },
  {
    placa: "XYZ5678",
    proprietario: "Maria Oliveira",
    numeroApartamento: "202",
    blocoApartamento: "B",
    modelo: "HB20",
    cor: "Branco",
    vaga: "15"
  },
  {
    placa: "DEF9012",
    proprietario: "Carlos Souza",
    numeroApartamento: "303",
    blocoApartamento: "C",
    modelo: "Onix",
    cor: "Preto",
    vaga: "18"
  }
];

const vagasSalvas = JSON.parse(localStorage.getItem("vagas"));

if (!vagasSalvas || vagasSalvas.length === 0) {
  localStorage.setItem("vagas", JSON.stringify(vagasIniciais));
}

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CadastrarVagas />} />
        <Route path="/vagas" element={<ListarVagas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
