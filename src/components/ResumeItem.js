import React, { useContext } from 'react'
import styled from 'styled-components'
import { DarkModeContext } from '../DarkModeContext';

function ResumeItem({year, title, sub_title, text}) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ResumeItemStyles darkMode={darkMode}>
        <div className="left-content">
            <p>{year}</p>
        </div>
        <div className="right-content">
            <h5>{title}</h5>
            <h6>{sub_title}</h6>
            <p>{text}</p>
        </div>
    </ResumeItemStyles>
  )
}

const ResumeItemStyles = styled.div`
    display: flex;

    &:not(:last-child) {
        padding-bottom: 2rem;
    }

    .left-content {
        width: 38%;
        padding-left: 1rem;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            left: -10.6px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: ${({ darkMode }) => darkMode ? "2px solid var(--border-color)" : "2px solid var(--font-light-color)"};
            background-color: ${({ darkMode }) => darkMode ? "var(--background-dark-color)" : "var(--background-light-color)"};
        }

        p {
            display: inline-block;
            margin-top: .25rem;
        }
    }

    .right-content {
        padding-left: 4rem;
        position: relative;
        width: 100%;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: ${({ darkMode }) => darkMode ? "var(--border-color)" : "var(--font-light-color)"};
        }

        h5 {
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: .5rem;
        }

        h6 {
            margin-bottom: .5rem; 
        }

        p {
            text-align: justify;
            width: 75%;
        }
    }
`;

export default ResumeItem