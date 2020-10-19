import styled from 'styled-components';
import { shade } from 'polished';


export const Title = styled.h1`
    font-size: 40px;
    color: #3A3A3A;
    margin-top: 20px;
`;

export const Div = styled.div`
      margin-top: 40px;
      margin-bottom: 80px;
    
    input {
        margin-top: 30px;
        margin-bottom: 30px;
        width: 300px;
        height: 35px;
        display: block;
    }
`;

export const Div2 = styled.div`
    display: flex;

   h2 + h2 {
        margin-left: 150px;
    }
`;



export const Formulario = styled.form`
    display: flex;

     input {
        width: 250px;
        height: 25px;   

        & + input {
            margin-left: 20px;
        }
    }

    button {
        margin-top: 40px;
        margin-right: 10px;
        width: 150px;
        height: 40px;
        border-radius: 0px 5px 5px 0px;
        background: #efefef;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#efefef')};
        }
    }
`;

export const Table = styled.table`
    margin-top: 80px;
    margin-bottom: 120px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;

    a {
        margin-left: 50px;
    }
}

tr:nth-child(even) {
    background-color: #dddddd;

   
`;


