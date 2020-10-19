import React, { FormEvent, useState } from 'react';

import { Title, Formulario } from './styles';

import api from '../../services/api';



const CadastroPessoa: React.FC = () => {
    const [first_name, setFirst_name] = useState('');
    const [second_name, setSecond_name] = useState('');

    async function cadastroPessoa(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (!first_name && !second_name) {
            alert('Digite o nome/sobrenome');
            return;
        }

        const data = {
            first_name,
            second_name,
        };

        try {

            const response = await api.post('/persons', data);


            alert(`A pessoa: ${response.data.first_name} ${response.data.second_name} foi cadastrada`)
            
        } catch (error) {
            alert('Error no cadastro, tente novamente');
        }
    
    }
    return (
        <>
        <Title>Cadastrar Pessoa</Title>
        <Formulario onSubmit={cadastroPessoa}>

            <h2>Nome</h2>
            <input
                type="first_name"
                placeholder="Digite o nome"
                value={first_name}
                onChange={e => setFirst_name(e.target.value)}
            />
            <h2>Sobrenome</h2>
            <input 
                type="second_name"
                placeholder="Digite o sobrenome"
                value={second_name}
                onChange={e => setSecond_name(e.target.value)}
            />

            <button type="submit">Salvar</button>
            <a href="/">
            <button type="button" >Voltar</button>
            </a>
        </Formulario>
        </>
    );
};

export default CadastroPessoa;