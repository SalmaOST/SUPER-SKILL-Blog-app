import React,{useState , useEffect} from 'react' 
import './posts.css'
import Post from '../post/Post'
import axios from 'axios';
import { useLocation } from 'react-router-dom';



export default function Posts(){
    const [posts, setPosts] = useState([]);
    const {search}= useLocation()
    const fetchPosts = async()=>{
            const res = await axios.get("http://localhost:4000/api/posts/"+ search)
           setPosts(res.data)
        }
    useEffect(()=>{
       fetchPosts()
    },[search])
  
    return(
        <div className='posts' >
        {posts.map(p =>(
          <Post post={p} />
        ))}
          
        </div>
    )
}