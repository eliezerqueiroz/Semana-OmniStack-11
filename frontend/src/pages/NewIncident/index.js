import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
        title,
        description,
        value, 
    };
    try {
        await api.post('incidents', data,  { 
            headers: {
                Authorization: ongId,
            }
         });

        history.push('/profile');
    } catch(err){
        alert('Erro ao cadastrar caso, tente novamente.');
    } 
} 

   return (
       <div className="newincident-container">
           <div className="content">
               <section>
                   <img src={logoImg} alt="Be the Hero"/>
                   <h1>Cadastro</h1>
                   <p>Descreva o caso detalhadamente para encontrar um Heroi que possa resolver</p>
                   <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                   </Link>
               </section>

               <form onSubmit={handleNewIncident}>
                   <input 
                   placeholder="Titulo do caso"
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                   />
                   <textarea  
                   placeholder="Descrição"
                   value={description}
                    onChange={e => setDescription(e.target.value)}
                   />
                   <input 
                   placeholder="Valor em Reais"
                   value={value}
                    onChange={e => setValue(e.target.value)}
                   />

                   <div className="input-grpup">
                   <button type="submit" className="button">
                       Cancelar
                   </button>

                   <button type="submit" className="button">
                       Cadastro
                   </button>
                   </div>

                   
               </form>
           </div>
       </div>
       
        

        );
}