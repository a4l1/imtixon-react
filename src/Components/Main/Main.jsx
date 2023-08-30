import React, { useContext } from 'react'
import "./Main.scss"
import { Card } from './Card/Card'
import { ThemeContext } from '../../DarkModeContext'

const Main = () => {

  const { theme, setTheme} = useContext(ThemeContext)
  function modeFunc(e) {
    setTheme(e.target.value)
    localStorage.setItem("mode", JSON.stringify(e.target.value))
  }

    
  return (
    <div className="cards_wrapper">
      <div className="darkMode">
      <select  defaultValue={theme } onChange={modeFunc}>
        <option value="light">{("light")}</option>
        <option value="dark">{("dark")}</option>
      </select>
      </div>

     <div className="container">
     <div className="cards">
            <div className="text1">
          <h1>Чехлы</h1>
            </div>
           
<Card />
  
            </div>
       
          
        </div>
     
     </div>
   
  )
}

export default Main