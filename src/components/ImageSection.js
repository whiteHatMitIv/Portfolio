import React, { useContext } from 'react'
import ImageSectionStyles from '../styles/ComponentStyles/ImageSectionStyles'
import resumeImg from "../images/Me.jpg";
import PrimaryButton from './PrimaryButton';
import { DarkModeContext } from '../DarkModeContext';

function ImageSection() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ImageSectionStyles darkMode={darkMode}>
      <div className="left-content">
        <img src={resumeImg} alt="Mon profil" />
      </div>
      <div className="right-content">
        <h4>Je suis <span>Ivan NTEUMI</span></h4>
        <p className="paragraphy">
          Etudiant en Génie Logiciel passionné par le développement informatique et la création de solutions innovantes. Mon parcours académique, combiné à mes projets personnels, m'a permis d'acquérir des compétences solides en conception logicielle, développement web et mobile, ainsi qu'en gestion de données.
          Ce portfolio est une vitrine de mon travail, où je partage mes projets, mes compétences et ma passion pour l'univers du développement. N'hésitez pas à explorer mes réalisations et à me contacter pour toute question ou collaboration.
          Merci de votre visite et bonne découverte ! 
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nom</p>
            <p>Age</p>
            <p>Nationalité</p>
            <p>Langue</p>
            <p>Localisation</p>
          </div>
          <div className="info">
            <p>: Ivan NTEUMI</p>
            <p>: 19</p>
            <p>: Camerounais</p>
            <p>: Français, Anglais</p>
            <p>: Douala-Yassa, Cameroun</p>
          </div>
        </div>
        <PrimaryButton title={"Telecharger le CV"} />
      </div>
    </ImageSectionStyles>
  )
}

export default ImageSection