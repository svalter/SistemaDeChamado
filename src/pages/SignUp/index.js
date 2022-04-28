import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth";
import { FiMail, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import styled from './SignUp.module.css'

import Logo from '../../assets/logo/logo.svg'

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassoword, setShowPassword] = useState(false);
  const { signUp } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name);
    }
  }

  return (
    <div className={styled.container}>
      <div className={styled.containerFormulario}>
        <div className={styled.logo}>
          <img src={Logo} alt="Logo Sistema de Chamados" className={styled.logoImg} />
        </div>

        <h4 className={styled.title}>Cadastrar uma conta</h4>

        <form onSubmit={handleSubmit} className={styled.formulario}>
          <div className={styled.contentInputs}>
            <input
              type="text"
              placeholder="Seu nome"
              className={styled.inputs}
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <FiUser className={styled.icons} />
          </div>
          <div className={styled.contentInputs}>
            <input
              type="text"
              placeholder="E-mail"
              className={styled.inputs}
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <FiMail className={styled.icons} />
          </div>
          <div className={styled.contentInputs}>
            <input
              type={showPassoword ? "text" : "password"}
              placeholder="Senha"
              className={styled.inputs}
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <div onClick={() => setShowPassword(!showPassoword)}>
              {showPassoword ?
                (
                  <FiEye className={styled.icons} />
                )
                :
                (
                  <FiEyeOff className={styled.icons} />
                )
              }
            </div>
          </div>
          <button type="submit" className={styled.buttonAccess}>Cadastrar</button>
        </form>
        <Link to="/" className={styled.links}>Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;
