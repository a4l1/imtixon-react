import React, { useContext } from 'react'
import { Iconst,  Telicon } from '../../assets/icon'
import "./Header.scss"
import { Like, Shop } from '../../assets/icon2'
import tel1 from "../../assets/img/iPhone-13-Pro-Max-silver-1000x1000 1.png"
import { AuthContext } from '../Main/AuthContext'

  

const Header = () => {
    const {settoken} = useContext(AuthContext)
    function LogoutFunc(){
        settoken(null)
    }
  return (
    <>
    <div className="header">
        <div className="container">
    <div className="header-text">
        <div className="logo">
            <h1>QPICK</h1>
            <div className="text">
                <Telicon />
                <h4 className='header__h4'>Выбрать модель телефона</h4>
                <Iconst />
                <button onClick={LogoutFunc}>Log out</button>
            </div>
        </div>
        <div className="icon">
           <div className="like"> <Like /></div>
          <div className="shop">  <Shop /></div>
        </div>
    </div>

    <div className="black-wrapper">
        <div className="black1">
            <div className="black-text">
                <h2>Аксессуары для <br />
                Iphone 13 Pro Max</h2>
            </div>
            <div className="black-img">
              <img src={tel1} alt="" />
            </div>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Header