import React from "react";
import  styled from './Client.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiUsers } from 'react-icons/fi'

export default function Client() {
    return (
      <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Clientes">
                    <FiUsers size={25}/>
                </Title>
            </div>
        </div>
    );
  }

  