import React from 'react'
import './contactBox.css'
import iWhatsapp from '../img/icon_whatsapp.svg'
import iMessenger from '../img/icon_messenger.svg'
import iChat from '../img/chat.svg'

function ContactBox() {

  const [estadoSwitch, setEstadoSwitch] = React.useState(false)

  const activarswitch = () => {
    console.log("acativa")
    if (estadoSwitch) {
      setEstadoSwitch(false)
    } else {
      setEstadoSwitch(true)
    }
  }

  return (
    <div className={estadoSwitch ? "contactbox" :"contactbox contactbox-true"}>
      <a href="https://api.whatsapp.com/send?phone=51957498221" target="_blank" rel="noreferrer">
        <img src={iWhatsapp} alt="" className="contactbox-item"/>
      </a>
      <a href="https://www.messenger.com/t/113697357219555/?messaging_source=source%3Apages%3Amessage_shortlink" target="_blank" rel="noreferrer">
        <img src={iMessenger} alt="" className="contactbox-item"/>
      </a>
      <div className={estadoSwitch ? "contactbox-switch" : "contactbox-switch contactbox-switch-true"}>
        <img src={iChat} alt="" className="contactbox-item-switch" onClick={() => activarswitch()}/>
      </div>
    </div>
  )
}

export default ContactBox
