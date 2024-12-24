import styled from "styled-components";

const ServiceSectionStyles = styled.section`
    .services {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 1.3rem;
        grid-auto-rows: 1fr;
    }

    @media (max-width: 1024px) {
        .services {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 428px) {
        .services {
            grid-template-columns: 1fr;
        }
    }
`;

export default ServiceSectionStyles;