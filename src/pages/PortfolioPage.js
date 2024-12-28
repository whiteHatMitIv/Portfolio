import React, { useState } from 'react';
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from '../components/Title';
import portfolios from '../data/portfolios';
import Menu from '../components/Menu';
import Button from '../components/Button';

const PortfolioPage = () => {
  const [menuItem, setMenuItem] = useState(portfolios);
  const [activeButton, setActiveButton] = useState('Tout');
  const allButtons = ['Tout', ...new Set(portfolios.map(item => item.category))];

  const filter = (button) => {
    if (button === 'Tout') {
      setMenuItem(portfolios);
    } else {
      const filteredData = portfolios.filter(item => item.category === button);
      console.log('Données filtrées: ', filteredData)
      setMenuItem(filteredData);
    }
  };

  return (
    <MainLayout>
      <Title title={'Portfolios'} span={'Portfolios'} />
      <InnerLayout>
        <Button
          filter={filter}
          button={allButtons}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfolioPage;
