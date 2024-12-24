import styled from "styled-components";

const PrimaryButtonStyles = styled.button`
    background-color: var(--primary-color);
    padding: 0.7rem 2.5rem;
    color: white;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    border-color: var(--border-color);
    border-width: 1px;

    &:hover {
        filter: brightness(1.3);
    }

    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0.2rem; 
        left: 0;
        bottom: 0;
        transition: width 0.5s ease-in-out;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    &:hover::after {
        width: 100%;
        background-color: var(--white-color);
    }

`;

export default PrimaryButtonStyles;