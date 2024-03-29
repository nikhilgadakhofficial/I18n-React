import React from 'react'
import './Home.css'
import I18n from './../Utils/I18n.js';

function Home() {

    const userCount = 15;

   
  return (
    <div>
        <h1>{I18n("welcomeMessage")}</h1>

        <h2>{I18n("normalMessage")}</h2>

        <h3>{I18n("greetingMessage")}</h3>

        <h4>{I18n("endMessage")}</h4>

       

        <select 
        defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
          localStorage.setItem("lang",e.target.value);
          window.location.reload();
        }}>
          <option value="mr ">Marathi</option>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
        </select>
          
        <p>{I18n("userMessage","<stuCount>",userCount)}</p>

    </div>
  )
}

export default Home