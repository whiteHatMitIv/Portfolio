import React, { useContext } from 'react'
import styled from 'styled-components'
import { DarkModeContext } from '../DarkModeContext';

function ProgressBar({title, width, text}) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ProgressBarStyles darkMode={darkMode}>
        <h6>{title}</h6>
        <div className="progress-bar">
            <p>{text}</p>
            <div className="progress">
                <span style={{width: width}}></span>
            </div>
        </div>
    </ProgressBarStyles>
  )
}

const ProgressBarStyles = styled.div`
    .progress-bar {
        display: flex;
        align-items: center;

        p {
            margin-right: 1.2rem;
        }
        
        .progress {
            position: relative;
            width: 100%;
            height: .3rem;
            background-color: ${({ darkMode }) => darkMode ? "var(--border-color)" : "var(--font-light-color)"};
            border-radius: 15px;

            span {
                background-color: var(--primary-color);
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                border-radius: inherit;
            }
        }
    }
`;

export default ProgressBar