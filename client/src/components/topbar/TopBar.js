import './topbar.css';
import {Link} from 'react-router-dom'


export default function TopBar(){
    const user = false
    return(
        <div className="top">
           <div className='topLeft'>
           <i class="TopIcon fab fa-facebook-square"></i>
           <i class="TopIcon fab fa-twitter-square"></i>
           <i class="TopIcon fab fa-pinterest-square"></i> 
           <i class="TopIcon fab fa-instagram-square"></i>
           </div>
           <div className='topCenter'>
               <ul className='topList'>
               <li className='topListItem'>
                   <Link className='link' to='/'>HOME</Link>
               </li>
                   <li className='topListItem'><Link className='link' to='/'>ABOUT</Link></li>
                   <li className='topListItem'><Link className='link' to='/'>CONTACT</Link></li>
                   <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
                   <li className='topListItem'>
                       {user && 'LOGOUT'}
                   </li>
               </ul>
           </div>
           <div className='topRight'>
               {
                   user ? ( <img className='topImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxIH5Bccbn8pi4n50LETfzG4Q0AoZq5hVzw&usqp=CAU' alt=''/>
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
               
              
               <i className="TopSearchIcon fas fa-search"></i>
           </div>

        </div>
    )
}