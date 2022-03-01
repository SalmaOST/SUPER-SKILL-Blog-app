import React from 'react'
import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className='headerTitles'>
                <span className='HeaderTitleSm'> Explain everything to us...<br/> And read your best articles <br/>
                  </span>
                <span className='HeaderTitleLg'>Welcome in our BLOG </span>
                
            </div>
           <img  className='headerImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vvuYF4Hz3PsybaQaupy-DYMGtEUlPdDBMQ&usqp=CAU' alt=''/>


        </div>
    )
}    
