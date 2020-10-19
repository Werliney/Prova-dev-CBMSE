import styled from 'styled-components';
import { shade } from 'polished';


export const Title = styled.h1`
    font-size: 40px;
    color: #3A3A3A;
    margin-top: 80px;
`;

export const Formulario = styled.form`
    margin-top: 80px;
    
    input {
        margin-top: 30px;
        margin-bottom: 30px;
        width: 300px;
        height: 35px;
        display: block;
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
