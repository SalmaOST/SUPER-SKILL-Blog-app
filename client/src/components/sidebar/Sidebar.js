import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar(){
    const [cats , setCats] = useState([]);

    useEffect(()=> {
        const getCat = async ()=>{
            const res= await axios.get("/categories")
            setCats(res.data)
        }
        getCat();
    },[])
    return(
        <div className='sidebar' >
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME </span>
                <img className='sidebarImg' src='pic.jpg' alt=''/> 
                <p className='sidebarP'> Creator of this Blog , Salma  is a Senegalese woman , living in a very far country : Kingdom of Saudi Arabia.<br/> She wasn't very glad to study Web development .
                But with the time learning and also with an amazing and marvelous intructor ; she enjoyed coding . <br/>
                This little application is her first one , but certainly not the last , she will try to improve her coding quality and design more difficult application.<br/> 
                Hope you will enjoy and like the application who will decide if she will get certified or not
                 <br/> Thank you.
                </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES </span>
            <ul className='sidebarList'>
                {cats.map( c=>(
                   <Link  to={`/?cat=${c.name}`} className="link">
                        <li className='sidebarListItem' > {c.name}</li>
                    </Link>
                ))}
               
               
            </ul>
            </div>
            <div className='sidebarItem'>
                 <span className='sidebarTitle'>FOLLOW US </span>
                    <div className='sidebarSocial'>
                       <a href='https://www.facebook.com/profile.php?id=100001827869009'><i className="sidebarIcon fab fa-facebook-square"></i></a>
                       <a href='https://twitter.com/SalmaBOmar'><i className="sidebarIcon fab fa-twitter-square"></i></a>
                       <a href='https://www.pinterest.com/sallatab/_saved/'><i className="sidebarIcon fab fa-pinterest-square"></i></a>
                       <a href='https://www.instagram.com/_bo.salma/'><i className="sidebarIcon fab fa-instagram-square"></i></a>
                     </div>
            </div>
    </div>            
    )
}