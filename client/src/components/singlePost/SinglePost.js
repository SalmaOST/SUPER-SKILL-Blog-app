import React from 'react' 
import './singlePost.css'


export default function SinglePost(){
    return(
        <div className='singlePost' >
      <div className='singlePostWrapper'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQI8okBGcF9AOMvdII-lstp31WDGRYsDUeg&usqp=CAU'
           alt='' className='singlePostImg'/>
           <h1 className='singlePostTitle'> Let starts things here knew
           <div className='singlePostEdit'>
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
           </div>
           </h1>
           <div className='singlePostInfo'>
               <span className='singlePostAuthor'>Autor: <b> Salla </b></span>
               <span className='singlePostDate'>1 hour ago</span>
           </div>
           <p className='singlePostDesc'>
                Lorem Ready to pour… the Font Awesome 6 Beta
                The next generation of the web’s favorite icon library +
                toolkit is now available as a Beta release! 
                Try out the Free version. Subscribe to Font Awesome Pro
                 to get even 
                 Lorem Ready to pour… the Font Awesome 6 Beta
                The next generation of the web’s favorite icon library +
                toolkit is now available as a Beta release! 
                Try out the Free version. Subscribe to Font Awesome Pro
                 to get even more
                 Lorem Ready to pour… the Font Awesome 6 Beta
                The next generation of the web’s favorite icon library +
                toolkit is now available as a Beta release! 
                Try out the Free version. Subscribe to Font Awesome Pro
                 to get even more
                 Lorem Ready to pour… the Font Awesome 6 Beta
                The next generation of the web’s favorite icon library +
                toolkit is now available as a Beta release! 
                Try out the Free version. Subscribe to Font Awesome Pro
                 to get even more
           </p>
      </div>
        </div>
    )
}