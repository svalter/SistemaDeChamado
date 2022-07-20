import React from 'react';
import styled from './Modal.module.css';
import {FiX}  from 'react-icons/fi';

export default function Modal(content) {

    return(
        <div className={styled.modal}>
            <div className={styled.container}>
                <button className={styled.close} onClick={content.close}>
                    <FiX size={25} color="#FFF"/>
                    Voltar
                </button>
                <div>
                    <h2>Detalhes do chamado</h2>
                    
                    <div className={styled.detailInfo}>
                        <span>
                            Cliente: <a>{content.content.custumer}</a>
                        </span>
                    </div>

                    <div className={styled.detailInfo}>
                        <span>
                            Assunto: <a>{content.content.description}</a>
                        </span>
                        <span>
                            Cadastrado em: <a>{content.content.createdFormated}</a>
                        </span>
                    </div>

                    <div className={styled.detailInfo}>
                        <span>
                            Status: <a style={{color: '#FFF', backgroundColor: content.content.status === 'Aberto' ? '#5cb85c' : '#999' }}>{content.content.status}</a>
                        </span>
                    </div>

                    {content.content.complement !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>{content.content.complement}</p>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}