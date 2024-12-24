import styled from "styled-components";

const MainContentStyled = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;

    .lines {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        
        .line-1,
        .line-2,
        .line-3,
        .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
            z-index: -1;
        }
    }
`

export default MainContentStyled;