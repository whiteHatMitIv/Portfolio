import React from 'react';
import styled from 'styled-components';

function Button({ filter, button, activeButton, setActiveButton }) {
  return (
    <ButtonStyles>
      {button.map((but, i) => {
        const isActive = activeButton === but;
        return (
          <button
            key={i}
            onClick={() => {
              console.log(`Bouton ${but} cliqué`)
              filter(but);
              setActiveButton(but);
            }}
            className={isActive ? 'active' : ''}
            aria-pressed={isActive}
          >
            {but}
          </button>
        );
      })}
    </ButtonStyles>
  );
}

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto 2rem auto;

  button {
    position: relative;
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .6rem 1.5rem;
    font-size: inherit;
    color: var(--white-color);
    border-radius: 6px;
    transition: all .6s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-color);
    }

    &:active, 
    &:focus {
      background-color: var(--primary-color);
    }

    &:not(:last-child) {
      margin-right: .5rem;
    }
  }

`;

export default Button;
