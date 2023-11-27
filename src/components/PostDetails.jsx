import React from 'react';
import { useParams, Link } from 'react-router-dom';
const PostDetails= ({posts})=>{
    const {id}=useParams();
    const post = posts.find(post => post.id === parseInt(id))

    return (
        <div>
            <button> <Link to={`/`}> Home
            </Link></button>
        <h2>{post.title}</h2>
        <img src={post.imageUrl} alt={`Thumbnail for ${post.title}`} style={{ maxWidth: '400px' }} />
        <p>{post.content}</p>
      </div>
    )
}

export default PostDetails;