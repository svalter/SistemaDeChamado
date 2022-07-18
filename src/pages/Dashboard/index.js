import React, { useState } from "react";
import styled from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus } from 'react-icons/fi'
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

                        <Link to="/new" className={styled.buttonNewCalled}>
                            <FiPlus color="#FFFFFF" size={25}></FiPlus>
                            Novo chamado
                        </Link>
                    </div>
                ):
                <div className={styled.container}>
                    <span>chamado 1</span>
                </div>
                }
            </div>
        </div>
    );
}

