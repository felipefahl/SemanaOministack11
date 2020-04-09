import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data ={
      name,
      email,
      whatsapp : whatsApp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push("/");
    } catch(err) {
      alert(`Erro: Tente novamente mais tarde`)
    }

  }

  return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ong</p>

                <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#E02041" />
                  Não tenho cadastro
                </Link>

            </section>
            <form onSubmit={handleRegister}>
              <input 
                placeholder="ONG"
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
              <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
              <input 
                placeholder="WhatsApp"
                value={whatsApp}
                onChange={e => setWhatsApp(e.target.value)}
              ></input>
              <div className="input-group">
                <input 
                  placeholder="Cidade"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                ></input>
                <input 
                  placeholder="UF" 
                  style={{ width: 80 }}
                  value={uf}
                  onChange={e => setUf(e.target.value)}
                ></input>
              </div>

              <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}

export default Register;