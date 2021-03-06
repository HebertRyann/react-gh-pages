import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'
import api from '../../services/api'

import './style.css';
import heroesImg from '../../assets/heroes.png'; 
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory('');

    async function handlerLogin(e){
        e.preventDefault();
        try{
            // const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', 'OngTest');
            history.push('/profile');
        }catch (err){
            alert('Falha ao tentar o login, tente novamente')

        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handlerLogin}>
                    <h1>Faça Seu logon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="heroes"/>    
        </div>
    );
}