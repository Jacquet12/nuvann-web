import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import './styles.scss'

import visaIcon from '../../assets/card/visa.svg'
import masterCard from '../../assets/card/mastercard.svg'
import paypal from '../../assets/card/paypal.svg'
import elo from '../../assets/card/elo.svg'
import visacheckout from '../../assets/card/visacheckout.svg'
import amex from '../../assets/card/amex.svg'
import boleto from '../../assets/card/boleto.svg'

export const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer_principal_container">
        <div className="footer_principal_cards">
          <img src={visaIcon} alt={visaIcon}/>
          <img src={masterCard} alt={masterCard}/>
          <img src={paypal} alt={paypal}/>
          <img src={elo} alt={elo}/>
          <img src={visacheckout} alt={visacheckout}/>
          <img src={amex} alt={amex}/>
          <img src={boleto} alt={boleto}/>
        </div>
        <div className="footer_separate">
          <hr />
        </div>
        <div className="footer_details">
          <div>
            <h2>Kontakte nou</h2>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p> <br />

            <p><span> <FaMapMarkerAlt/> </span>Rua Inambu 540, Efapi-Chapeco, SC </p>
            <p><span> <FaPhoneAlt/> </span>+55-0000000000</p>
            <p><span> <FaEnvelope/> </span> nuvann@contact.com</p>
          </div>
          <div>
            <h2>Rakousi Enfo</h2>

            <p>Komanw kapab Vann </p>
            <p> Komanw ka fè yon reklamasyon </p>
            <p> Komanw ka pab Vann </p>
            <p> Komanw ka fè yon reklamasyon  </p>
            <p>Komanw ka pab Vann</p>
            <p> Komanw ka fè yon reklamasyon  </p>
            <p>Komanw kapab Vann </p>
          </div>
          <div>
            <h2>Relasyon Nuvann</h2>

            <p>Komanw kapab Vann </p>
            <p> Komanw ka fè yon reklamasyon </p>
            <p> Komanw ka pab Vann </p>
            <p> Komanw ka fè yon reklamasyon  </p>
            <p>Komanw ka pab Vann</p>
            <p> Komanw ka fè yon reklamasyon  </p>
            <p>Komanw kapab Vann </p>
          </div>

          <div>
            <h2>Espas Kliyan</h2>

            <p><span><AiOutlineUser /></span> Profil</p>
            <p><span><AiOutlineShoppingCart/></span> Panye</p>
            <p><span> <AiOutlineLogout /> </span> Dekonekte</p>
          </div>
        </div>
        <div className="footer_signature">
            <span>Copyright © {year} - Nuvann webStore | All rights reserved.</span>
        </div>
    </div>
  )
}