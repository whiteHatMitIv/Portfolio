import styled from 'styled-components'

const SidebarStyled = styled.div`
    transition: all 0.4s ease-in-out;
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: ${({ darkMode }) => darkMode ? "var(--side-dark-color)" : "var(--side-light-color)"};
`

export default SidebarStyled