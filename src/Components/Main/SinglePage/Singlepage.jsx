import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Singlepage.scss"

export const Singlepage = () => {
    const [postValue, setPostValue] = useState([])
    const [emailValue, setEmailValue] = useState([])
   

    function changeName(e){
        setPostValue(e.target.value)
    }
    function changeEmail(e){
        setEmailValue(e.target.value)
    }



    
    let bot = {
        TOKEN:"6274513906:AAFwquzwImRxts4UakQJLcXo2TOIMoIpaas",
        chatID:`-1001954137986`,
        message: `Ismi: ${postValue}; Email: ${emailValue};`, 
      

    }

    console.log(bot);

    function sendMessage(){
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}`,
        {
            method: "GET"
        }
        )

        .then(
            (success) =>{
                console.log("send messge");
            },
            (error) =>{
                console.log("error");
            }
        )
    }
  return (
    <div className='buying'>
        <Link className='btn' to='/' ><button>chiqish</button> </Link>

       

        <form action="">
            <input type="text" placeholder='Ismingizni kiriting' onChange={(e) => changeName(e)}/>
            <input type="text   " placeholder='Emailingizni kiriting' onChange={(e) => changeEmail(e)} />
            <button onClick={sendMessage} className='form_button'>send</button>
        </form>
    </div>
  )
}
