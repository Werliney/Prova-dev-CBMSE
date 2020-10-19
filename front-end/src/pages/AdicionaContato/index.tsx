import React from 'react';



import { Title, Div, Div2, Formulario } from './styles';


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
const AdicionaContato: React.FC = (props) => {



    return (
        <>
        <Title>Adicionar Contato</Title>

        <Div>
            <h2>Nome</h2>
            <input  />
            <h2>Sobrenome</h2>
            <input />
        </Div>
        
        <h2>Contatos</h2>
            <Div2>
            <h2>Tipo do Contato</h2>
            <h2>Contato</h2>
            </Div2>
        <Formulario>
            
            <input  />
            <input  />

            <button type="submit">Salvar</button>
            <a href="/">
            <button type="button" >Voltar</button>
            </a>
        </Formulario>
        </>
    );
};

export default AdicionaContato;