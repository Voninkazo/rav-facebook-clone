import React, { useContext,useState } from 'react'

import {Context} from '../Context'

function Add() {
  const [postContent, setPostContent] = useState('');
	const [postImage, setPostImage] = useState('');

  const {state,dispatch} = useContext(Context);
  const {currentUser} = state;

  function addNewPost(e) {
    e.preventDefault();
   const newPost= {
        legend: postContent,
        image: postImage,
        userId: currentUser,
        id: Date.now(),
        date: Date.now(),
        comments: [],
        likes: [],
   }
dispatch({ type: 'ADD_NEW_POST', newPost: newPost });
resetForm();
}

function resetForm() {
  setPostContent('');
  setPostImage('');
}

  return (
    <form onSubmit={addNewPost} className="add-form">
      <label htmlFor="legend" >New post</label>
      <textarea 
      placeholder="Say what is in your mind..."
      value={postContent}
      onChange={e => setPostContent(e.target.value)}
      required
       >
       </textarea>
      <label htmlFor="picture">Picture url</label>
      <input 
      type="url"
      placeholder="Paste an URL here..."
      value={postImage}
      onChange={e => setPostImage(e.target.value)}
      required
      />
      <button>Post</button>
    </form>
  )
}

export default Add