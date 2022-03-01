import React from 'react' 
import './post.css'
import {Link} from "react-router-dom"


export default function Post({post}){
    const PF ="http://localhost:4000/images/"
    return(
        <div className='post' >
            {post.photo &&(
               <img 
                className='postImg'
                src={PF+post.photo} 
                alt=''/> 
            )}
          <div className='postInfo'>
              <div className='postCats'>
                      {post.categories.map(c=>(
                           <span key={c} className='postCat'> {c.name} </span>
                      ))}
              </div>
              <Link to={`/post/${post._id}`} className="link">
                 <span className="postTitle">{post.title}</span>
            </Link>
             <hr/>
             <span className='PostDate'>{new Date(post.createdAt).toDateString()} </span>
             <p className='postDesc'>
                 {post.desc}
             </p>


          </div>
        </div>
    )
}