import styled from "styled-components";

const ContactPageStyles = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        .right-content {
            display: flex;
            flex-direction: column;
        }

        .contact-title {
            color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--font-dark-color)"};
            margin-bottom: 2.4rem;

            h4 {
                font-size: 1.5rem;
            }
        }

        .form {
            width: 100%;
            .form-field {
                position: relative;
                width: 100%;
                
                label {
                    position: absolute;
                    left: 20px;
                    top: -12px;
                    display: inline-block;
                    background-color: ${({ darkMode }) => darkMode ? "var(--background-dark-color)" : "var(--background-light-color)"};
                    color: inherit;
                }

                input {
                    border: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
                    outline: none;
                    background: transparent;
                    height: 8vh;
                    padding: 1.2rem 0.8rem;
                    color: inherit;
                    font-size: medium;
                    border-radius: 7px;
                    width: 100%;
                }

                textarea {
                    background-color: transparent;
                    border-radius: 7px;
                    border: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
                    width: 100%;
                    outline: none;
                    color: inherit;
                    padding: 1.2rem 0.8rem;
                    text-align: justify;
                }
            }

            .form-field:nth-child(n+2) {
                margin-top: 1.5rem;
            }
        }
    }
`;

export default ContactPageStyles