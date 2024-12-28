import styled from "styled-components";

const MainContentStyled = styled.main`
  transition: all 0.4s ease-in-out;
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
      background-color: ${({ darkMode }) => darkMode ? "var(--border-color)" : "var(--border-color-light)"};
      z-index: -1;
    }
  }

  .light-dark-mode {
    background-color: ${(props) =>
        props.darkMode
            ? "var(--background-dark-color)"
            : "var(--background-light-color)"};
    position: fixed;
    z-index: 100;
    height: 45px;
    width: 45px;
    padding: 0;
    border-radius: 50%;
    border: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
    left: calc(100% - 4rem);
    top: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;

    img {
      height: 60%;
      width: 60%;
    }
  }
`;

export default MainContentStyled;
