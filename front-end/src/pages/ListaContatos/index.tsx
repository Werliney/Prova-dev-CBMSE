import React, { useState, useEffect } from 'react';
import { FiPlus, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';

import { Title, Div, Table} from './styles';

interface Pessoa {
    id: string;
    first_name: string;
    second_name: string;
}

const ListaContatos: React.FC = () => {

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    useEffect(() => {
        api.get('/persons').then(response => {
            setPessoas(response.data);
        });
    }, []);

    async function removerContato(id:string): Promise<void> {
        await api.delete(`/persons/${id}`);

        setPessoas(pessoas.filter(
            pessoa => pessoa.id !== id
        ));
    }
    
    return (
        <>
        <Div>
        <Title>Lista dos Contatos</Title>
        
        <a href="/cadastro">
        <button type="submit" >Adicionar Pessoa</button>
        </a>
        </Div>

        <Table >
            <th>Nome Completo</th>
            <th>Ações</th>
            {pessoas.map(pessoa => (
                <tr key={pessoa.id}>
                    <td>{pessoa.first_name}
                    {" "}
                    {pessoa.second_name}
                    </td>
                    
                    <td>
                    <a href="/adicionaContato">
                        <FiPlus />
                     </a>
                    <a href="/visualizaContato">
                       <FiEye />
                    </a>
                     <a href="/editaContato/:person_id">
                      <FiEdit2 />
                    </a>
                    <a href="/">
                      <FiTrash2 onClick={() => removerContato(pessoa.id)}  />
                    </a>
                    </td>
                </tr>
            ))}
        </Table>

        </>
    );
};

export default ListaContatos;