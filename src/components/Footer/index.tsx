import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import './styles.scss'

export const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer_principal_container">
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
        <hr className="footer_separator"/>
        <div className="footer_signature">
            <span>Copyright © {year} - Nuvann webStore | All rights reserved.</span>
        </div>
    </div>
  )
}