import React, { useState } from 'react';
// 1st way to import: import { useState } from 'react'; useState();
// 2nd way to use: React.useState(); 
import './Post.css';

function Post( props ){

  // props.post --> { id: 1, likes: 21, content: ... } Contains whole object
  //      GETTER  SETTER
  const [ likes, setLikes ] = useState(props.likes); // [ 0, function ]
  // NEVER CHANGE STATE LIKE THIS: likes = 3;
  // ALSO AVOID: dislikes++ OR ++dislikes
  // ONLY: setLikes(3);
  function handleLike(){
    setLikes( likes + 1 );
  }

  // PRACTICE: Create a Dislike button and counter
  let [ dislikes, setDislikes ] = useState(0);
  function handleDislike(){
    setDislikes( dislikes + 1 );
  }

  return (
    <div className="post">
      <p>{ props.content } | <span>Likes: {likes}</span> | Dislikes: {dislikes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );

}

export default Post;