import React, { useState } from "react";
import  styled from './Custumers.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiUsers } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Custumers() {

    const [ nameCompany, setNameCompany] = useState('');
    const [ cnpj, setCnpj] = useState('');
    const [ address, setAddress] = useState('')

    function handleAddCustumer(e) {
        e.preventDefault();
        alert('Adicionou');
    }

    return (
      <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Clientes">
                    <FiUsers size={25}/>
                </Title>
                <div className={styled.container}>
                    <div>
                        <form className={styled.containerForm} onSubmit={handleAddCustumer}>

                            <label>Nome da Empresa</label>
                            <input 
                                type="text" 
                                placeholder="Nome da sua empresa" 
                                value={nameCompany} 
                                onChange={(e) => setNameCompany(e.target.value)} 
                                className={styled.inputs}/>

                            <label>CNPJ:</label>
                            <input 
                                type="text" 
                                placeholder="Seu CNPJ"
                                value={cnpj} onChange={(e) => setCnpj(e.target.value)} 
                                className={styled.inputs} />

                            <label>Endereço:</label>
                            <input 
                                type="text" 
                                placeholder="Endereço da Empresa"
                                value={address} onChange={(e) => setAddress(e.target.value)} 
                                className={styled.inputs} />

                            <div className={styled.actions}> 
                                <button type="submit" className={styled.buttonToSave}>
                                    Cadastrar
                                </button>

                                 <Link to="/dashboard" className={styled.buttonToCancel}>
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  