import React, {useContext} from "react";
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
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto avatar" />
            </div>
            <div className={styled.containerLinks}>
      
                <Link to="/dashboard" className={styled.linksTitle}>
                    <FiHome className={styled.linksIcons} />
                    <p>Chamados</p>
                </Link>

                <Link to="/clients" className={styled.linksTitle}>
                    <FiUsers className={styled.linksIcons} />
                    <p>Clientes</p>
                </Link>

                <Link to="/profile" className={styled.linksTitle}>
                    <FiSettings className={styled.linksIcons} />
                    <p >Configurações</p>
                </Link>

                <div>
                    <button onClick={() => signOut()} className={styled.buttonLogOut}>
                        <FiLogOut className={styled.linksIcons}/>
                        Sair
                    </button>
                </div>
            </div>
        </div>
    )
}