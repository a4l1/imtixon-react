import React, { useContext, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import "./Login.scss"

export const Login = () => {
  const nameref = useRef(null)
  const paswordref = useRef(null)
  const { settoken } = useContext(AuthContext)
  const navigate = useNavigate()

  function Handlesubmit(e) {
    e.preventDefault()

    const data = {
      name: nameref.current.value,
      password: paswordref.current.value
    }
    if (data.name == 'Azizbek' && data.password == 'Azizbek007' ) {
      settoken(data)
      navigate("/")
    } else{
      navigate("/Error")
    }

      
  }

  return (
    <div className="box1">
      <form onSubmit={Handlesubmit}>
      <input ref={nameref} type="text" placeholder='Email kititing' />
      <input ref={paswordref} type="password" placeholder='Parolingizni kiriting' />
      <button className='button1'>Send</button>
    </form>
    </div>
  )
}
