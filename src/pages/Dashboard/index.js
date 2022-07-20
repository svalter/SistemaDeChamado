import React, { useState, useEffect } from "react";
import styled from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';

const listRef = firebase.firestore().collection('called').orderBy('created', 'desc');

export default function Dashboard() {

    const [called, setCalled] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [detailModal, setDetailModal] = useState();


    useEffect(() => {

        loadCalled();

    },[loadCalled()])


    async function loadCalled() {
        await listRef.limit(5)
        .get()
        .then((snapshot) => {
            updateState(snapshot);
            
        })
        .catch((error) => {
            setLoadingMore(false);
            console.log(error);
        })
        setLoading(false);
    }

    function togglePostModal(item) {
        setShowPostModal(!showPostModal);
        setDetailModal(item);
    }

    async function updateState(snapshot) {
        const isCollectionEmpty = snapshot.size === 0;

        if(!isCollectionEmpty) {
            let list = [];

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    description: doc.data().description,
                    custumer: doc.data().custumer,
                    custumerId: doc.data().custumerId,
                    created: doc.data().created,
                    createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complement: doc.data().complement
                })
            })

            const lastDoc = snapshot.docs[snapshot.docs.length -1];
            setCalled([...list])
        }
    }

    if(loading) {
        return(
            <div>
                <Sidebar/>
                <div className={styled.content}>
                    <Title name="Atendimentos">
                        <FiMessageSquare size={25} />
                    </Title>
                    <div className={styled.container}>
                        <span>Buscando chamados...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Atendimentos">
                    <FiMessageSquare size={25} />
                </Title>

                {called.length === 0 ? (
                    <div className={styled.container}>
                        <span>Nenhum chamado registrado...</span>

                        <Link to="/newCalled" className={styled.buttonNewCalled}>
                            <FiPlus color="#FFFFFF" size={25}></FiPlus>
                            Novo chamado
                        </Link>
                    </div>
                ) :
                    <>
                        <div className={styled.contentAction}>
                            <Link to="/newCalled" className={styled.buttonNewCalled}>
                                <FiPlus color="#FFFFFF" size={25}></FiPlus>
                                Novo chamado
                            </Link>

                        </div>
                        <div className={styled.container}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Assunto</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Cadastrado em</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {called.map((item, index)=> {
                                        return(
                                            <tr key={index}>
                                                <td data-label="Cliente">{item.custumer}</td>
                                                <td data-label="Assunto">{item.description}</td>
                                                <td data-label="Status">
                                                    <span 
                                                        className={styled.badge} 
                                                        style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c': '#999' }}>{item.status}
                                                    </span>
                                                </td>
                                                <td data-label="Cadastrado">{item.createdFormated}</td>
                                                <td data-label="Ação">
                                                    <button 
                                                        className={styled.buttonAction} 
                                                        style={{ backgroundColor: '#3583f6'}} 
                                                        onClick={() => togglePostModal(item)}>
                                                            <FiSearch color="#FFFFFF" size={15}/>
                                                    </button>
                                                    <Link to={`/new/${item.id}`}className={styled.buttonAction} style={{ backgroundColor: '#F6A935'}}>
                                                        <FiEdit2 color="#FFFFFF" size={15}/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </>
                }
                {
                    showPostModal && (
                        <Modal content={detailModal} close={togglePostModal}/>
                    )
            }
            </div>
            
        </div>
    );
}

