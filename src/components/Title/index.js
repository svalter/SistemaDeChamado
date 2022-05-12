import React from 'react';
import styled from './Title.module.css';

export default function Title({children, name}) {
    return(
        <div className={styled.title}>
            {children}
            <span>{name}</span>
        </div>
    )
}