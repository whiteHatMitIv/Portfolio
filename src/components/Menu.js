import React, { useContext } from 'react'
import styled from 'styled-components'
import GithubIcon from '@mui/icons-material/GitHub'
import { DarkModeContext } from '../DarkModeContext'


function Menu({menuItem}) {  
    const { darkMode } = useContext(DarkModeContext)

    return (
        <MenuItemStyles darkMode={darkMode}>
            {
                menuItem.map((item) => {
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link}>
                                            <GithubIcon/>
                                        </a>
                                    </li>          
                                </ul>
                            </div>
                            <div className="desc">
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </MenuItemStyles>
    )
}

const MenuItemStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    .grid-item {
        .portfolio-content {
            display: flex;
            flex-direction: column;
            position: relative;
            border-bottom: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
            border-left: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
            border-top: ${({ darkMode }) => darkMode ? "8px solid var(--border-color)" : "8px solid var(--font-light-color)"};
            border-right: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
            height: 60vh;
            border-radius: 8px;
            transition: all 0.4s ease-in-out;

            &:hover {
                border-top: 8px solid var(--primary-color);
                transform: translateY(3px);
            }

            .desc {
                padding: 1rem 1rem;
                h6 {
                    font-size: 1.1rem;
                    text-align: center;
                }

                p {
                    text-align: justify;
                }
            }

            img {
                width: 100%;
                height: 35vh;
                object-fit: cover;
                border-bottom: ${({ darkMode }) => darkMode ? "1px solid var(--border-color)" : "1px solid var(--font-light-color)"};
            }

            ul {
                /* display: none; */
                opacity: 0;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateY(-100px);
                transition: all 0.4s ease-in-out;

                li {
                    display: flex;
                    background-color: ${({ darkMode }) => darkMode ? "var(--border-color)" : "var(--font-light-color)"};
                    align-items: center;
                    justify-content: center;
                    padding: .6rem;
                    border-radius: 50%;
                    transition: all 0.5s ease-in-out;

                    &:hover {
                        background-color: #5F4687;

                        svg {
                            transition: all 0.5s ease-in-out;
                            color: var(--white-color);
                        }
                    }

                    a {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                svg {
                    font-size: 1.4rem;
                }
            }

            .portfolio-image {
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    background-color: white;
                    opacity: 0.7;
                    transform-origin: left;
                    transition: all 0.4s ease-in-out;
                }
                
                &:hover {
                    cursor: pointer;

                    ul {
                        opacity: 1;
                        transform: translateY(0);
                        /* display: block; */
                        /* position: absolute;
                        left: 50%;
                        top: 50%; */
                        transform: translate(-50% , -50%);
                    }

                    &::before {
                        left: 5px;
                        top: 10px;
                        width: calc(100% - 10px);
                        height: calc(100% - 20px);
                    }
                }
            }
        }
    }
`

export default Menu