import React, { useContext, useState } from 'react';
import styled from './Profile.module.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import avatar from '../../assets/icones/avatarUser.svg';
import { FiSettings, FiUpload } from 'react-icons/fi';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';


export default function Profile() {

    const { user, setUser, storageUser, signOut } = useContext(AuthContext);
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    const [imageAvatar, setImageAvatar] = useState(null); 

    function handleFile(e) {
        
        if(e.target.files[0]) {
            const image = e.target.files[0];

            if( image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
            }
            else {
                toast.error('Envie uma image do tipo PNG ou JPEG');
                setImageAvatar(null);
                return null;
            }
        }
    }

     async function handleUpload() {
        
        const currentUid = user.uid;
    
        const uploadTask = await firebase.storage().ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then(async() => {
            toast.success('Foto enviada com sucesso!');

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then(async (url) => {
                    let urlPhoto = url;

                    await firebase.firestore().collection('users')
                    .doc(user.uid)
                    .update({
                        avatarUrl:urlPhoto,
                        name: name
                    })
                    .then(() => {
                        let data = {
                            ...user,
                            avatarUrl:urlPhoto,
                            name:name
                        };
                        setUser(data);
                        storageUser(data);
                    })
                }
            )
        })
    }

    async function handleSave(e) {
        e.preventDefault();

        if (imageAvatar === null && name !== '') {
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                name: name
            })
            .then(() => {
                let data = {
                    ...user,
                    name: name
                };
                setUser(data);
                storageUser(data);
            })
        }
        else if(name !== '' && imageAvatar !== null) {
            handleUpload();
        }
    }

    return (
        <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>
                <div className={styled.container}>
                    <div>
                        <form className={styled.containerForm} onSubmit={handleSave}>
                            <label>Foto de Perfil</label>
                            <label className={styled.contentAvatar}>
                                <span className={styled.iconAddAvatar}>
                                    <FiUpload color="#0F0C29" size={25} />
                                </span>
                                <input type="file" accept="image/*" onChange={handleFile} /> <br />
                                {
                                    avatarUrl == null ?
                                        <img src={avatar} width="150" height="150" alt="Foto de perfil do usuário" />
                                        :
                                        <img src={avatarUrl} width="200" height="200" alt="Foto de perfil do usuário" className={styled.photoProfile}/>
                                }
                            </label>

                            <label>Nome</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styled.inputs} />

                            <label>Email</label>
                            <input type="text" value={email} disabled={true} className={styled.inputs} />

                            <div className={styled.actions}> 
                                <button type="submit" className={styled.buttonToSave}>
                                    Salvar
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
    )
}