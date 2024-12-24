import styled from "styled-components";

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        z-index: -1;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .5s ease-in-out;

                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    cursor: pointer;
                }

                &:not(:last-child) {
                    margin-right: 1rem;
                }

                svg {
                    margin: 0.5rem;
                }
            }

            .i-twitter:hover {
                border: 2px solid white;
                color: white
            }

            .i-github:hover {
                border: 2px solid #5F4687;
                color: #5F4687
            }
        }
    }
`;

export default HomePageStyled;