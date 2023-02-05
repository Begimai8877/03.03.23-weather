import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <NavLink to= "/">
                        The weather Channel
                    </NavLink>
                </div>
                <div className='header__search'>
                    <input type = "text" placeholder='Поиск по городу или индексу'/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Header