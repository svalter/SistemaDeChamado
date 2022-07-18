import React from "react";
import  styled from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiHome } from 'react-icons/fi'

export default function Dashboard() {
    return (
      <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Dashboard">
                    <FiHome size={25}/>
                </Title>
            </div>
        </div>
    );
  }

  