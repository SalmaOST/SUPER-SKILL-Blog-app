import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './settings.css'

export default function Settings(){
    return(
        <div className='settings'>
            <div className='settingWrapper'> 
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update your account </span>
                    <span className='settingsDeleteTitle'>Deelete account </span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsProfilePicture'>
                        <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8McywWZ3FFJHYZr_nXiSY1_VclLDdwAcXg&usqp=CAU' alt=''/>
                        <label htmlFor='fileInput'>
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Salla'/>
                    <label>Email</label>
                    <input type="email" placeholder='salla@gmail.com'/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className='settingSubmit'>Update</button>

                    
                </form>
            </div>
                <Sidebar/>
           
        </div>
    )
}    
