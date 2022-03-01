
import React, { useContext}  from 'react'
import { Context } from '../../../context/Context'

import './settings.css'




export default function Settings(){
    const {user} = useContext(Context)
    

    

    return(
        <div className='settings'>
            <div className='settingWrapper'> 
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Account information</span>
                </div>
                <form className='settingsForm' >
                    
                   
                    <label>Username:</label>
                    <input type="text" placeholder={user.username} />
                    <label>Email:</label>
                    <input type="text"  />
                    <label>Password:</label>
                    <input type="text"  />
                    
                    
                </form>
            </div>
           
           
        </div>
    )
}    
