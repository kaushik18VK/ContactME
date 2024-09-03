import  {useState} from 'react';
import styles from './Contact.module.css';
import Buttons from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
// import { useState } from 'react';

const ContactForm = () => {
  const [Name, setName] = useState("Kaushik")
  const [email, setEmail] = useState("Kaushik@gmail.com")
  const [text, setText] = useState("I'm Software Developer")

  const onSubmit=(event) => {
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Buttons icons={<MdMessage fontSize="24px"/>} text="VIA SUPPORT CHAT" />
            <Buttons icons={<FaPhoneAlt fontSize="24px"/>} text="VIA CALL" />
            </div>
            <Buttons isOutline={true} text="VIA EMAIL FORM" icons={<HiMail fontSize="24px"/>}/>
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text"  name='name'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email"  name='email'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">TEXT</label>
                <textarea name='text' rows="8"  />
              </div>
              <div style={{
                display:'flex',
                justifyContent:'end'
              }}>
              <Buttons text="SUBMIT BUTTON"/>
              </div>

              <div>
                {Name+ " "+ email + " " + text}
              </div>
            </form>
        </div>

        <div className={styles.contact_image}>
          <img src="/Images/body.svg" alt="contact image" />
          </div>     
    </section>
  )
}

export default ContactForm
