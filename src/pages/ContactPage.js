import React, { useContext } from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from "../components/Title";
import ContactPageStyles from '../styles/PagesStyles/ContactPageStyles';
import PrimaryButton from "../components/PrimaryButton"
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ContactItem from '../components/ContactItem';
import { DarkModeContext } from '../DarkModeContext';


function ContactPage() {
  const phone = <PhoneIcon />
  const email = <MailOutlineOutlinedIcon />
  const adress = <PlaceOutlinedIcon />
  const { darkMode } = useContext(DarkModeContext)

  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'}/>
      <ContactPageStyles darkMode={darkMode}>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Prenez Contact</h4>
            </div>
            <form className='form'>
              <div className="form-field">
                <label htmlFor="name">Entrez votre nom*</label>
                <input type="text" id="name" required/>
              </div>
              <div className="form-field">
                <label htmlFor="email">Entrez votre email*</label>
                <input type="email" id="email" required/>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Entrez le sujet</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Entrez votre message</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title={"Envoyer l'Email"}/>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem 
              icon={phone}
              title={'Telephone'}
              contact1={'+237 658-339-863'}
              contact2={'+237 650-162-592'}
            />
            <ContactItem 
              icon={email}
              title={'Email'}
              contact1={'ivannteumi@gmail.com'}
              contact2={'taopaipai275@gmail.com'}
            />
            <ContactItem 
              icon={adress}
              title={'Adresse'}
              contact1={'Yassa-Douala, Cameroun'}
              contact2={''}
            />
          </div>
        </InnerLayout>
      </ContactPageStyles>
    </MainLayout>
  )
}

export default ContactPage