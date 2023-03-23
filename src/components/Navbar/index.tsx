import React, { useState } from 'react'
import { FiUser } from "react-icons/fi"
import './styles.scss'
import InputSearch from '../InputSearch'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'
import Avatar from '@mui/material/Avatar'

import logo from "../../assets/logo.svg"
import cartLogo from "../../assets/cartIcon.svg"
import navAvatar from "../../assets/1.jpg"
import Badge from '@mui/material/Badge/Badge'
import { Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'

export const Navbar: React.FC = () => {
 const {user, logout}=useAuthContext()
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchText: string) => {
    // Call your search API or perform the search logic here
    // Update the search results state with the results
    // setSearchResults([searchText]);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar_container_principal">
        <div className='nav_header'>
        <Link to="/">
          <img src={logo} alt="" />
          </Link>
          <div className="navbar_search">
            <InputSearch placeholder='Chèche yon pwodui...' onSearch={handleSearch} />
          </div>
          <ul>
        
            { !!user ?
              // <li>
              //   <Avatar
              //   alt={user.name}
              //   src={navAvatar}
              //   sx={{ width: 32, height: 32 }}
              //   />
              //   <span> {user.name}</span>
              // </li>
              <>
              <li onClick={handleClick}
                onMouseOver={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}>
                <Avatar 
                alt={user.name}
                  src={navAvatar}
                  sx={{ width: 32, height: 32 }} />
              <span> {user.name}</span>

              </li>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 25,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                {/* <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem> */}
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              </>
            : 
            <li>
              <Link to="/login" >
                <button><FiUser/> konekte | Enskri</button>
              </Link>
            </li>
            }
              <li>
              <Link to="/cart">
                <Badge color="error" badgeContent={4}>
                  <img src={cartLogo} alt="cartIcon" />
                </Badge>
              </Link>
            </li>
          </ul>

          <ul>

          </ul>
        </div>
        <nav className="navbar_list">
            <ul>
                <li>Prensipal</li>
                <li>Pwomotion</li>
                <li>Kategori ^</li>
                <li>Vann</li>
            </ul>
        </nav>
    </div>
  )
}
