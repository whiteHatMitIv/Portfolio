import styled from "styled-components";

const ImageSectionStyles = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
    
    .left-content {
        width: 70%;

        img {
           width: 100%;
           border-radius: 20px;
        }
    }

    .right-content {
        width: 100%;
        padding-top: 2.5rem;
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;

            .info-title {
                padding-right: 2rem;

                p {
                    font-weight: 600;
                }
            }

            .info-title, .info {
                p {
                    padding: .8rem 0;
                }
            }
        }

        h4 {
            font-size: 2rem;
            color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--font-dark-color)"};
            
            span {
                font-size: 2rem;
            }
        }

        .paragraphy {
            padding: .8rem 0;
            text-align: justify;
        }
    }
`;

export default ImageSectionStyles;