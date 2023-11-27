import React from "react";
import { Link } from 'react-router-dom';


const Home = ({posts})=>{
    
    return (
        <div>
        <h2>Este es mi blog</h2>
        <ul>
        {posts && posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
              <img src={post.imageUrl} alt={`Thumbnail for ${post.title}`} style={{ maxWidth: '200px' }} />
              <p>{post.content}</p>
            </Link>
          </li>
        ))}
            </ul>
            </div>
    )
}
;
export default Home;