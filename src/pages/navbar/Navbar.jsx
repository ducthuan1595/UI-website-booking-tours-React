////////////////////////////////////////////////
import React from "react";

import NavbarItem from "./NavbarItem";
import styled from './Navbar.module.css';

const navbarItems = [
	{
		"type": "Stays",
		"icon": "fa-bed",
		"active": true
	},
	{
		"type": "Flights",
		"icon": "fa-plane",
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": "fa-car",
		"active": false
	},
	{
		"type": "Attractions",
		"icon": "fa-bed",
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": "fa-taxi",
		"active": false
	}
]


function Navbar () {
  return (
		<div className={styled['nav']}>
    <div className={styled['navbar']}>
      <div className={styled['navbar-title']}>
        <h3>Booking Website</h3>
        <div className={styled['navbar-login']}>
          <button className={styled['btn-login']}>Register</button>
          <button className={styled['btn-login']}>Login</button>
        </div>
      </div>
      <NavbarItem items={navbarItems}/>
    </div>
		</div>
  )
}

export default Navbar;