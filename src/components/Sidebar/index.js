import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { FiHome, FiSettings, FiUsers } from 'react-icons/fi';
import styled from './Sidebar.module.css';
import Logo from '../../assets/logo/logo.svg';


export default function Sidebar() {
    const { user } = useContext(AuthContext);
    
    return (
        <div className={styled.containerSiderbar}>
            <div className={styled.containerLogo}>
                <img src={Logo} alt="Logo Sistema de Chamados" className={styled.logoImg} />
            </div>
            <div className={styled.containerLinks}>
                <div className={styled.links}>
                    <FiHome className={styled.linksIcons} />
                    <Link to="called" className={styled.linksTitle}>
                        <p>Chamados</p>
                    </Link>
                </div>
                <div className={styled.links}>
                    <FiUsers className={styled.linksIcons} />
                    <Link to="client" className={styled.linksTitle}>

                        <p>Clientes</p>
                    </Link>
                </div>
                <div className={styled.links}>
                    <FiSettings className={styled.linksIcons} />
                    <Link to="settings" className={styled.linksTitle}>
                        <p >Configurações</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}