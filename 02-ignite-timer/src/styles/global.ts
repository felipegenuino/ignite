import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors['green-500']};
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: ${(props) => props.theme.colors['gray-900']};
        color: ${(props) => props.theme.colors['gray-300']};
        font-family: ${(props) => props.theme.fonts.heading}, sans-serif;
        font-weight:  ${(props) => props.theme.fonts.weight.medium};
        font-size: 1.6rem;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
    }
    input, button, textarea {
        font: 1.6rem "Roboto", sans-serif;
    }
    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`
