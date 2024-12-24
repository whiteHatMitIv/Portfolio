import styled from "styled-components";

const ContactItemStyles = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:not(:last-of-type) {
        margin-bottom: 1.6rem;
    }

    &:is(:first-of-type) {
        margin-top: 5.5rem;
    }

    .left-content {
        border: 1px solid var(--border-color);
        padding: 0.7rem;
        /* display: flex;
        align-items: center;
        justify-content: center; */
        margin-right: 1.7rem;
        svg {
            font-size: 2rem;
        }
    }

    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1rem;
            padding-bottom: 0.4rem;
        }

        p {
            padding: 0.1rem 0;
        }
    }
`;

export default ContactItemStyles