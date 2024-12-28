import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --background-light-grey:rgba(210, 210, 213, 0.94);
    --border-color: #2e344e;
    --border-color-light:rgba(255, 255, 255, 0.86);
    --background-light-color: #f1f1f1;
    --background-light-color-2: rgba(3, 127, 255, 0.3);
    --white-color: #fff;
    --dark-color: #000;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --side-light-color: #E4E4E4;
    --side-dark-color: #191d2b;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6B6B6B;
    --scrollbar-track-color: #383838;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
}

body {
    background-color: ${({ darkMode }) => darkMode ? "var(--background-dark-color)" : "var(--background-light-color)"};
    color: ${({ darkMode }) => darkMode ? "var(--font-light-color)" : "var(--font-dark-color)"};
}

body::-webkit-scrollbar {
    width: 9px;
    background-color: var(--scrollbar-bg-color);
}

body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--scrollbar-thump-color);
}

body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: var(--scrollbar-track-color);
}

a {
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1 {
    font-size: 3.5rem;
    color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--dark-color)"};
    span {
        font-size: inherit;
    }
}

h6 {
    color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--dark-color)"};
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
}

span {
    color: var(--primary-color);
}

`

export default GlobalStyle;