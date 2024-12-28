import styled from "styled-components";

const ServiceCardStyles = styled.div`
    background-color: ${({ darkMode }) => darkMode ? "var(--background-dark-grey)" : "var(--background-light-grey)"};
    border-bottom: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
    border-left: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
    border-top: ${({ darkMode }) => darkMode ? "8px solid var(--border-color)" : "8px solid var(--font-light-color)"};
    border-right: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
    border-radius: 8px;
    transition: all 0.4s ease-in-out;
    overflow: hidden;

    &:hover {
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
        cursor: pointer;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 160px;
        padding: 0.9rem;
        text-align: justify;
        position: relative;

        h4 {
            color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--dark-color)"};
            font-size: 1rem;
            text-align: center;
            padding: 1.7vh 0;
            position: relative;
            margin-bottom: 3vh;

            &::after {
                content: "";
                width: 4rem;
                background-color: ${({ darkMode }) => darkMode ? "var(--border-color)" : "var(--font-light-color)"};
                height: 3px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                border-radius: 10px;
            }
        }

        p {
            padding: 0.5rem 0;
        }
    }
`;

export default ServiceCardStyles;