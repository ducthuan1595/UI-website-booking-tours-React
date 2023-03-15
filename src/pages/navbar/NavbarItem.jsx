////////////////////////////////////////////////
import React from "react";

import styled from './NavbarItem.module.css'

function NavbarItem (props) {
  // console.log(props.items)
  return (
    <>
      <div className={styled['navbar-items']}>
        {props.items.map((item, index)=> {
          return (
            <button key={index} className={`${styled['navbar-item']} ${item.active && styled['active']}`}>
              <i className={`fas ${item.icon}`}></i>
              <p>{item.type}</p>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default NavbarItem;