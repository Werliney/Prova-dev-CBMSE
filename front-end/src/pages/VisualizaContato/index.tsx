import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';

import { Title, Div, Table} from './styles';

interface Contatos {
    id: string;
    person_id: string;
    contact: string;
    type_contact: {
        name: string;
    },
    person: {
        first_name: string;
        second_name: string;
    }
}

const VisualizaContato: React.FC = () => {

    const [contatos, setContatos] = useState<Contatos[]>([]);

    useEffect(() => {
        api.get('/contacts').then(response => {
            setContatos(response.data);
        });
    }, []);

    async function removerContato(id:string): Promise<void> {
        await api.delete(`/contacts/${id}`);

        setContatos(contatos.filter(
            contato => contato.id !== id
        ));
    }

    return (
        <>
        <Div>
        <Title>Visualizar Contatos</Title>
        
        <a href="/adicionaContato">
        <button type="submit" >Adicionar Contato</button>
        </a>
        </Div>

        <Table >
            <th>Nome Completo</th>
            <th>Tipo</th>
            <th>Contato</th>
            <th>Ações</th>
            {contatos.map(contato => (
                <tr key={contato.id}>
                    <td>
                    {contato.person.first_name}
                    {" "}
                    {contato.person.second_name }
                    </td>

                    <td>
                        {contato.type_contact.name}

                    </td>

                    <td>
                        {contato.contact}

                    </td>
                    
                    <td>
                     <a href="/editaContato/:person_id">
                      <FiEdit2 />
                    </a>
                    <a href="/">
                      <FiTrash2 onClick={() => removerContato(contato.id)}  />
                    </a>
                    </td>
                </tr>
            ))}
        </Table>

        </>
    );
};

export default VisualizaContato;