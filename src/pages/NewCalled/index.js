import React, { useContext, useState, useEffect } from 'react';
import styled from './NewCalled.module.css';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { Link } from "react-router-dom";
import { FiPlus } from 'react-icons/fi';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

export default function NewCalled() {

    const [loadCustumers, setLoadCustumers] = useState(true);
    const [custumers, setCustumers] = useState([]);
    const [custumerSelected, setCustumerSelected] = useState(0);
    const [description, setDescription] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complement, setComplement] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function loadCustumers() {
            let lista = [];
            await firebase.firestore().collection('custumers')
                .get()
                .then((snapshot) => {

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nameCompany: doc.data().nameCompany
                        })
                    })
                    if (lista.length === 0) {
                        setCustumers([{ id: '1', nameCompany: 'FREELA' }]);
                        setLoadCustumers(false);
                        return;
                    }
                })
                .catch((error) => {
                    setLoadCustumers(false);
                    setCustumers([{ id: '1', nameCompany: '' }]);
                })

            setCustumers(lista);
            setLoadCustumers(false);
        }

        loadCustumers();
    }, []);

    async function handleRegister(e) {
        e.preventDefault();

        await firebase.firestore().collection('called')
            .add({
                created: new Date(),
                custumer: custumers[custumerSelected].nameCompany,
                custumerId: custumers[custumerSelected].id,
                description: description,
                status: status,
                complement: complement,
                userId: user.uid
            })
            .then(() => {
                toast.success('Chamado cadastrado com sucesso!');
                setComplement('');
                setCustumerSelected(0);
            })
            .catch((error) => {
                toast.error('Ops, erro ao registrar!')
                console.log(error)
            })
    }

    function handleChangeSelect(e) {
        setDescription(e.target.value);
    }

    function handleOptionChange(e) {
        setStatus(e.target.value);
    }

    function handleChangeCustumers(e) {
        setCustumerSelected(e.target.value);

    }

    console.log("caralho", custumers.length === 0);

    return (
        <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Cadastro Chamados">
                    <FiPlus size={25} />
                </Title>
                <div className={styled.container}>
                    {custumers.length === 0 ? (
                        <div className={styled.contentCustumer}>
                        <span>Nenhum cliente registrado...</span>

                        <Link to="/custumers" className={styled.buttonNewCustumer}>
                            <FiPlus color="#FFFFFF" size={25}></FiPlus>
                            Novo cliente
                        </Link>
                    </div>
                    ) :
                    (

                    <div>
                        <form className={styled.containerForm} onSubmit={handleRegister}>

                            <label>Cliente</label>
                            <select className={styled.select} value={custumerSelected} onChange={handleChangeCustumers}>
                                {custumers.map((item, index) => {
                                    return (
                                        <option key={item.id} value={index}>
                                            {item.nameCompany}
                                        </option>
                                    )
                                })}
                            </select>

                            <label>Assunto</label>
                            <select className={styled.select} value={description} onChange={handleChangeSelect}>
                                <option value="Suporte">Suporte</option>
                                <option value="Visita Técnica">Visita Técnica</option>
                                <option value="Financeiro">Financeiro</option>
                            </select>


                            <label>Status</label>
                            <div className={styled.status}>
                                <input
                                    type="radio"
                                    name="radio"
                                    value="Aberto"
                                    onChange={handleOptionChange}
                                    checked={status === 'Aberto'}
                                />
                                <span>Em Aberto</span>

                                <input
                                    type="radio"
                                    name="radio"
                                    value="Progresso"
                                    onChange={handleOptionChange}
                                    checked={status === 'Progresso'}
                                />
                                <span>Progresso</span>

                                <input
                                    type="radio"
                                    name="radio"
                                    value="Atendido"
                                    onChange={handleOptionChange}
                                    checked={status === 'Atendido'}
                                />
                                <span>Atendido</span>
                            </div>

                            <label>Complemento</label>
                            <textarea
                                type="text"
                                placeholder="Descreva seu problema (opcional)"
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}>
                            </textarea>

                            <div className={styled.actions}>
                                <button type="submit" className={styled.buttonToSave}>
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}