import React, { useState } from 'react'
import logo from "../../assets/logo.svg"
import cartLogo from "../../assets/cartIcon.svg"
import { FiUser } from "react-icons/fi"
import './styles.scss'
import InputSearch from '../InputSearch'

export const Navbar: React.FC = () => {
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchText: string) => {
    // Call your search API or perform the search logic here
    // Update the search results state with the results
    // setSearchResults([searchText]);
  };

  return (
    <div className="navbar_container_principal">
        <div className='nav_header'>
          <img src={logo} alt="" />
          <div className="navbar_search">
            <InputSearch placeholder='Chèche yon pwodui...' onSearch={handleSearch} />
          </div>
          <ul>
            <li>
              <button><FiUser/> konekte | Enskri</button>
            </li>

            <li>
              <img src={cartLogo} alt="cartIcon" />
            </li>
          </ul>
        </div>
        <nav className="navbar_list">
            <ul>
                <li>Prensipal</li>
                <li>Pwomotion</li>
                <li>Kategori ^</li>
                <li>Vann</li>
                <li>About</li>
            </ul>
        </nav>
    </div>
  )
}
