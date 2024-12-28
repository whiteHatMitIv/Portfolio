import React, { useContext } from 'react'
import HomePageStyled from '../styles/PagesStyles/HomePageStyles'
import ParticlesComponent from '../components/Particle'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import GithubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/X'
import { DarkModeContext } from '../DarkModeContext'


function HomePage() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <HomePageStyled>
        <div className="p-particles-js">
            <ParticlesComponent id="particles" color={darkMode ? "#FFF" : "#a4acc4"}/>
        </div>
        <div className="typography">
          <h1>Salut je suis <span>Ivan NTEUMI</span></h1>
          <p>
            Etudiant en filière genie logiciel à l'IUT de Douala.
            Je suis un développeur passionné notamment dans le domaine
            du développement mobile, logiciel et intelligence artificielle.
          </p>
          <div className='icons'>
            <a href='/' className="icon i-facebook">
              <FacebookIcon/>
            </a>
            <a href='/' className="icon i-github">
              <GithubIcon/>
            </a>
            <a href='/' className="icon i-twitter">
              <TwitterIcon/>
            </a>
          </div>
        </div>
    </HomePageStyled>
  )
}

export default HomePage
