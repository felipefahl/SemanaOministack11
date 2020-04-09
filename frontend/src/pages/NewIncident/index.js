import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');
    const [value, setValue] =  useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
    
        const data ={
            title,
            description,
            value
        };
        try {
          await api.post('incidents', data, {
            headers: {
                Authorization: ongId
            }
        });
          alert(`Cadastrado com sucesso`)
          history.push("/profile");
        } catch(err) {
          alert(`Erro: Tente novamente mais tarde`)
        }
    
      }

    return(
        <div className="new-incident-container">
             <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo incidente</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Título do caso"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    ></input>
                    <textarea 
                        placeholder="Descrição"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    ></textarea>
                    <input 
                        placeholder="Valor em rais"
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                    ></input>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>            
        </div>
    );
}