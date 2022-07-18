import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { FiHome, FiSettings, FiUsers, FiLogOut } from 'react-icons/fi';
import styled from './Sidebar.module.css';
import avatar from '../../assets/icones/avatar.svg';


export default function Sidebar() {

    const { user, signOut } = useContext(AuthContext)

    return (
        <div className={styled.containerSiderbar}>
            <div className={styled.contentAvatar}>
                {
                    user.avatarUrl === null ?
                        <img src={avatar} alt="Foto avatar" />
                        :
                        <img src={user.avatarUrl} width="80" height="80" alt="Foto de perfil do usuário" className={styled.photoProfile} />
                }
            </div>

            <div className={styled.containerLinks}>

                <Link to="/dashboard" className={styled.linksTitle}>
                    <FiHome className={styled.linksIcons} />
                    <p>Chamados</p>
                </Link>

                <Link to="/custumers" className={styled.linksTitle}>
                    <FiUsers className={styled.linksIcons} />
                    <p>Clientes</p>
                </Link>

                <Link to="/profile" className={styled.linksTitle}>
                    <FiSettings className={styled.linksIcons} />
                    <p >Configurações</p>
                </Link>

                <button onClick={() => signOut()} className={styled.buttonLogOut}>
                    <FiLogOut className={styled.linksIcons} />
                    Sair
                </button>
            </div>
        </div>
    )
}