import { useState } from "react";
import "./CadastrarVagas.css"
import { useNavigate } from "react-router";

const CadastrarVagas =()=>{
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});


  const handleChange = (e)=>{
      setFormData(p =>({
          ...p, [e.target.name]: e.target.value
      }))
      console.log(formData)
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const vagasExistentes = JSON.parse(localStorage.getItem("vagas")) || [];
  
    const novasVagas = [...vagasExistentes, formData];
  
    localStorage.setItem("vagas", JSON.stringify(novasVagas));
    navigate("/vagas")

  };

  return(

    <div className="body">
        <div className="container">
            <h1>Cadastrar Vagas</h1>
        <form onSubmit={handleSubmit}>
            <input
        type="text"
        name="placa"
        className="form-input"
        placeholder="Placa do veículo"
        value={formData.placa}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="proprietario"
        className="form-input"
        placeholder="Nome do proprietário"
        value={formData.proprietario}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="numeroApartamento"
        className="form-input"
        placeholder="Número do apartamento"
        value={formData.numeroApartamento}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="blocoApartamento"
        className="form-input"
        placeholder="Bloco do apartamento"
        value={formData.blocoApartamento}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="modelo"
        className="form-input"
        placeholder="Modelo do veículo"
        value={formData.modelo}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cor"
        className="form-input"
        placeholder="Cor do veículo"
        value={formData.cor}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="vaga"
        className="form-input"
        placeholder="Número da vaga de estacionamento"
        value={formData.vaga}
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  )

}

export default CadastrarVagas