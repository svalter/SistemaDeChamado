import React, { useState, useContext } from "react";
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth";
import styled from './SignIn.module.css';
import Logo from '../../assets/logo/logo.svg';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassoword, setShowPassword] = useState(false);

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      signIn(email, password);
    }
  }

  return (
    <div className={styled.container}>
      <div className={styled.containerForm}>
        <div className={styled.logo}>
          <img src={Logo} alt="Logo Sistema de Chamados" className={styled.logoImg} />
        </div>
        <h4 className={styled.title}>Login</h4>
        <form onSubmit={handleSubmit} className={styled.form}>
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
          <button type="submit" className={styled.buttonAccess}>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
        </form>
        <Link to="/register" className={styled.links}>Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
