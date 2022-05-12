import React from 'react';
import  styled from './Profile.module.css';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import { FiSettings } from 'react-icons/fi'

export default function Profile() {
    return (
        <div>
            <Sidebar />
            <div className={styled.content}>
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>
            </div>
        </div>
    )
}