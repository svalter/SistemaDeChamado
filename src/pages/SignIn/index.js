import React, { useState } from "react";
import { FiMail, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from './SignIn.module.css'

import Logo from '../../assets/logo/logo.png'

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styled.container}>
      <div className={styled.containerFormulario}>
        <div className={styled.logo}>
          <img src={Logo} alt="Logo Sistema de Chamados" className={styled.logoImg} />
        </div>
        <h2 className={styled.title}>Entrar</h2>
        <form className={styled.formulario}>
          <div className={styled.contentInputs}>
            <input type="text" placeholder="Digite seu email" className={styled.inputs} />
            <FiMail className={styled.icons} />
          </div>
          <div className={styled.contentInputs}>
            <input type="password" placeholder="Digite sua senha" className={styled.inputs} />
            <FiEye className={styled.icons} />
          </div>
          <button className={styled.buttonAccess}>Acessar</button>
        </form>
        <Link to="/register" className={styled.links}>Criar uma conta</Link>
        <Link to="" className={styled.links}>Esqueci minha senha</Link>
      </div>
    </div>
  );
}

export default SignIn;
