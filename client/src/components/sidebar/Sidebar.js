import React from 'react' 
import './sidebar.css'

export default function Sidebar(){
    return(
        <div className='sidebar' >
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME </span>
                <img classname='sidebarImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLVcroA2AX3NMR6TvqJNjtGaWyi7e3tVhFQ&usqp=CAU' alt=''/> 
                <p className='sidebarP'> lorem vnfififdjsfiorfsfjrigerigjsfgvfijsignik
                    fsngidfngidigbjdfigjjfgjigjgbnbkdfgjdoggdfii
                    </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES </span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'> Life</li>
                <li className='sidebarListItem'> Music</li>
                <li className='sidebarListItem'> Style</li>
                <li className='sidebarListItem'> Sport</li>
                <li className='sidebarListItem'> Tech</li>
                <li className='sidebarListItem'> Cinema </li>
            </ul>
            </div>
            <div className='sidebarItem'>
                 <span className='sidebarTitle'>FOLLOW US </span>
                    <div className='sidebarSocial'>
                        <i class="sidebarIcon fab fa-facebook-square"></i>
                        <i class="sidebarIcon fab fa-twitter-square"></i>
                        <i class="sidebarIcon fab fa-pinterest-square"></i> 
                        <i class="sidebarIcon fab fa-instagram-square"></i>
                     </div>
            </div>
    </div>            
    )
}