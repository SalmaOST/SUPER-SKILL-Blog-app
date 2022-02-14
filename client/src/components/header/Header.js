import React from 'react'
import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className='headerTitles'>
                <span className='HeaderTitleSm'> React & Node</span>
                <span className='HeaderTitleLg'>Blog </span>
            </div>
           <img  className='headerImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3lfMD48zSA8F3c9aB078CCotAA-uZc001A&usqp=CAU' alt=''/>


        </div>
    )
}    
