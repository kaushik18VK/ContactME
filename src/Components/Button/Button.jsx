import React from 'react'
import styles from "./Button.module.css";
import { MdMessage } from 'react-icons/md';

const Button = ({isOutline,icons,text,...rest}) => {
  
  return (  
    <button {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icons}
      {text}  
    </button>
  )
}
 
export default Button
