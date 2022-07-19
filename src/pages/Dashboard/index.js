import React, { useState } from "react";
import styled from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Dashboard() {

    const [called, setCalled] = useState([]);

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
                                    <tr>
                                        <td data-label="Cliente">Teste</td>
                                        <td data-label="Assunto">Suporte</td>
                                        <td data-label="Status">
                                            <span className={styled.badge} style={{ backgroundColor: '#5cb85c'}}>Em aberto</span>
                                        </td>
                                        <td data-label="Cadastrado">15/07/2022</td>
                                        <td data-label="Ação">
                                            <button className={styled.buttonAction} style={{ backgroundColor: '#3583f6'}}>
                                                <FiSearch color="#FFFFFF" size={15}/>
                                            </button>
                                            <button className={styled.buttonAction} style={{ backgroundColor: '#F6A935'}}>
                                                <FiEdit2 color="#FFFFFF" size={15}/>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

