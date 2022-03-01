import React, { useContext } from 'react';
import './topbar.css';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';


export default function TopBar(){
    const {user , dispatch } = useContext(Context)
    const handleLogout =() =>{
        dispatch({type:"LOGOUT"})
    }
    return(
        <div className="top">
           <div className='topLeft'>
           <a href='https://www.facebook.com/profile.php?id=100001827869009'><i className="TopIcon fab fa-facebook-square"></i></a>
           <a href='https://twitter.com/SalmaBOmar'><i className="TopIcon fab fa-twitter-square"></i></a>
           <a href='https://www.pinterest.com/sallatab/_saved/'><i className="TopIcon fab fa-pinterest-square"></i></a>
           <a href='https://www.instagram.com/_bo.salma/'><i className="TopIcon fab fa-instagram-square"></i></a>
           </div>
           <div className='topCenter'>
               <ul className='topList'>
               <li className='topListItem'>
                   <Link className='link' to='/'>HOME</Link>
               </li>
                   <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
                   <li className='topListItem' onClick={handleLogout}>
                     {user &&  'LOGOUT'} 
                   </li>
               </ul>
           </div>
           <div className='topRight'>
               {
                   user ? (
               <Link to="/settings" >
               <i className="TopIcon fas fa-user"></i>
               </Link>
                ): (
                   <ul className='topList'>
                       <li className='topListItem'>
                           <Link className='link' to='/login'>LOGIN</Link>
                      </li>
                      <li className='topListItem'>
                           <Link className='link' to='/register'>REGISTER</Link>
                      </li>
                      </ul>
                )}
               
              
           </div>

        </div>
    )
}