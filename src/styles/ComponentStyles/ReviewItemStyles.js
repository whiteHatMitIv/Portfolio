import styled from "styled-components";

const ReviewItemStyles = styled.div`
    padding: 2rem 1rem;
    width: 50%;
    border-left: 4px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;

    &:not(:first-child) {
        margin-left: 2rem;
    }
    
    &::after {
        content: "";
        position: absolute;
        left: 0.9rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
`;

export default ReviewItemStyles;