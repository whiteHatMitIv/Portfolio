import styled from "styled-components";

const ServiceCardStyles = styled.div`
    background-color: var(--background-dark-grey);
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
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

        h4 {
            color: var(--white-color);
            font-size: 1rem;
            text-align: center;
            padding: 1.7vh 0;
            position: relative;
            margin-bottom: 3vh;

            &::after {
                content: "";
                width: 4rem;
                background-color: var(--border-color);
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