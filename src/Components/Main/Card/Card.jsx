import React, { useEffect, useState } from 'react'
import "./Card.scss"
import {Link, NavLink} from 'react-router-dom'

export const Card = () => {

  


  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <div>
      {users.length > 0 && (
        <div className="cards">
        {users.map(user => (
      
          <NavLink to='/buy' className="card">

            <img className='card_img' src={user.image} alt="" />
            <h1>{user.title}</h1>
       <div className="rate1">
          <div className="icon">
          <i class="fa-solid fa-star"></i>
          </div>
          <span>  {user.rating.rate} </span>  
       </div>
          </NavLink>
      ))}
       
      </div>
         
      
      )}
    </div>
  );
}


