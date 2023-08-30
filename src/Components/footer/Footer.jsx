import React from 'react'
import "./Foote.scss"


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
          <div className="Footer_wrapper">
            <div className="div1">
                <h1>QPICK</h1>
            </div>
            <div className="div2">
                <h4>Избранное</h4>
                <h4>Корзина</h4>
                <h4>Контакты</h4>
            </div>
            <div className="div3">
                <h4>Условия сервиса</h4>
                <div className="tillar">
                    <h6>Каз</h6>
                    <h6>Рус</h6>
                    <h6>Eng</h6>
                </div>
            </div>
            <div className="iconka">
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
               
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Footer