import React from 'react'
import { InnerLayout } from '../styles/Layout'
import ServiceSectionStyles from '../styles/ComponentStyles/ServiceSectionStyles'
import Title from '../components/Title'
import ServiceCard from './ServiceCard'
import webdev from '../images/asset/web_dev.svg'
import mobiledev from '../images/asset/mobile_dev.svg'
import ai from '../images/asset/AI.svg'
import logiciel from '../images/asset/logiciel.svg'
import data from '../images/asset/data.svg'

function ServiceSection() {
  return (
    <InnerLayout>
      <ServiceSectionStyles>
        <Title title={'Services'} span={'Services'}/>
        <div className="services">
          <ServiceCard 
            image={webdev} 
            title={'Developpement web'}
            paragraph={"Conception de sites modernes, performants et adaptés à vos besoins pour une expérience utilisateur optimale."}
          />
          <ServiceCard 
            image={mobiledev} 
            title={'Developpement mobile'}
            paragraph={"Création d'applications mobiles performantes et intuitives, adaptées à vos besoins et à vos utilisateurs."}
          />
          <ServiceCard 
            image={ai} 
            title={'Intelligence artificielle et machine learning'}
            paragraph={"Développement de solutions intelligentes pour automatiser, analyser et optimiser vos processus."}
          /> 
          <ServiceCard 
              image={logiciel} 
              title={'Developpement logiciel'}
              paragraph={"Conception de logiciels sur mesure, fiables et performants, adaptés à vos besoins spécifiques."}
            />
          <ServiceCard 
            image={data} 
            title={'Analyse de données et Data Science'}
            paragraph={"Exploitation des données pour extraire des insights, optimiser vos décisions et créer de la valeur."}
          /> 
        </div>
      </ServiceSectionStyles>
    </InnerLayout>
  )
}

export default ServiceSection