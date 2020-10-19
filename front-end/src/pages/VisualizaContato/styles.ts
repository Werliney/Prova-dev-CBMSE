import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 40px;
    color: #3A3A3A;
    margin-top: 80px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        margin-top: 80px;
        width: 200px;
        height: 50px;
        border-radius: 0px 5px 5px 0px;
        background: #efefef;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#efefef')};
        }
    }
`;

export const List = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    

    ul {
        list-style-type: none;
    }
`;

export const Table = styled.table`
    margin-top: 80px;
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
