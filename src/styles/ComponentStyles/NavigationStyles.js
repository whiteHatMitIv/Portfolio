import styled from "styled-components";

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;

        .active-class {
            background-color: var(--primary-color);
        }

        li {
            position: relative;
            display: block;
            a{
                display: block;
                padding: .2rem 0;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;

                &:hover {
                    cursor: pointer;
                    color: var(--font-light-color);
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)/*ease*/;
                    z-index: 3;
                    opacity: 0.6;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            padding: 1.2rem 0;
            font-size: 1.1rem;
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .nav-items {
            flex-direction: column;
        }
    }
`;

export default NavigationStyled;
