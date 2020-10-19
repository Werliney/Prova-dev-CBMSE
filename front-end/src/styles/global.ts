import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    body {
        background: #F0F0F5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 1000px;
        margin: 0 auto;
        padding: 60px 20px;
    }

    button {
        cursor: pointer;
    }
`;