import React, {useState, useEffect} from 'react';
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api'
import './style.css'

export default function Profile(){
    const incidents = [
        {id: 1, title: 'Adote um Cachorrinho', description: 'Filhotes de cães para adoção', value: 100},
        {id: 2, title: 'Adote um Gatinho', description: 'Filhotes gatos para adoção', value: 120},
        {id: 3, title: 'Ajude a cadelinha Jude', description: 'A cadelinha jude não perdeu uma pata em um acidente de carro, ajude ela a compra uma protese', value: 150},
    ];
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');


    async function handleDeleteIncident(id){
        try {
            // await api.delete(`incidents/${id}`, {
            //     headers: {
            //         Authorization: ongId,
            //     }

            // });            
            incidents = incidents.filter(incident => incident.id !== id);
        } catch {
            alert('Error ao deletar')
        }
    }
    
    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be The Hero"/>
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastra Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>

                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASOS:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇAO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
                
            </ul>
        </div>
    );
}