import React, { useContext, useState } from 'react';
import  styled from './Profile.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import avatar from '../../assets/icones/avatar.svg';
import { FiSettings, FiUpload } from 'react-icons/fi';

import { AuthContext } from '../../contexts/auth';


export default function Profile() {

    const { user } = useContext(AuthContext);
    const [nome, setNome] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    return (
        <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>
                <div className={styled.container}>
                    <div>
                        <form className={styled.containerForm}>
                            <label className={styled.contentAvatar}>
                                <span className={styled.iconAddAvatar}>
                                    <FiUpload color="#0F0C29" size={25}/>
                                </span>
                                <input type="file" accept="image/*"/> <br/>
                                {
                                    avatarUrl == null ?
                                    <img src={avatar} width="150" height="150" alt="Foto de perfil do usuário"/>
                                    :
                                    <img src={avatarUrl} width="150" height="150" alt="Foto de perfil do usuário"/>
                                }
                            </label>

                            <label>Nome</label>
                            <input type="text" value={nome} onChange={ (e) => setNome(e.target.value) } className={styled.inputs}/>

                            <label>Email</label>
                            <input type="text" value={email} disabled={true} className={styled.inputs}/>

                            <button type="submit" className={styled.buttonToSave}>
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}