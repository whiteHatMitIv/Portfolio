import styled from "styled-components";

const TitleStyles = styled.div`
    position: relative;
    h2 {
        color: var(--white-color);
        font-size: 2.5rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        /* position: relative; */
        padding-bottom: 0.3rem;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 8rem;
            height: 0.2rem;
            background-color: var(--background-light-color-2);
            border-radius: 10px;
            left: 0;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.8rem;
            height: 0.2rem;
            background-color: var(--primary-color);
            border-radius: 10px;
            left: 0;
        }

        span {
            font-weight: 700;
            color: rgba(25, 29, 43, 0.44);
            font-size: 3.6rem;
            position: absolute;
            left: 0;
            top: 25%;
            z-index: -1;
        }
    }

`;

export default TitleStyles;