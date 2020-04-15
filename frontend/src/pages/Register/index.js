import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
//import { useState } from 'react';



export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();

        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');

        } catch(err){
            alert('Erro no cadastro, tente novamente');
        }
    }

   return (
       <div className="register-container">
           <div className="content">
               <section>
                   <img src={logoImg} alt="Be the Hero"/>

                   <h1>Cadastro</h1>
                   <p>Faça seu cadastro, entre na plataforma e ajude pessoas a resolverem causas da sua ONG</p>

                   <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Ja sou cadastrado
                   </Link>
               </section>

               <form onSubmit={handleRegister}>
                   <input 
                    placeholder="Nomde da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                   />
                   <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                   />
                   <input 
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsApp(e.target.value)}                
                   />

                   <div className="input-grpup">
                       <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                       />

                       <input 
                        placeholder="UF" 
                        style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                       />
                   </div>

                   <button type="submit" className="button">
                       Cadastro
                   </button>
               </form>
           </div>
       </div>
       
        

        );
}