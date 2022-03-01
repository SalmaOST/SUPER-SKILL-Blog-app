import axios from 'axios'
import React, { useContext, useState }  from 'react'
import { Context } from '../../../context/Context'
import Sidebar from '../../sidebar/Sidebar'
import './settings.css'




export default function Settings(){
    const {user} = useContext(Context)
    const[file,setFile] = useState(null)
    const[username,setUsername] = useState("")
    const[succes,setSuccess] = useState(false)

    

    return(
        <div className='settings'>
            <div className='settingWrapper'> 
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Account information</span>
                </div>
                <form className='settingsForm' >
                    
                   
                    <label>Username</label>
                    <input type="text" placeholder={user.username} />
                    <label>Email</label>
                    <input type="text"  />
                    <label>Password</label>
                    <input type="text"  />
                    
                    
                </form>
            </div>
                <Sidebar/>
           
        </div>
    )
}    
