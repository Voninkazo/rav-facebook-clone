import React, { useContext } from 'react'

import {Context} from '../Context'

function Add() {
  const {addNewPost} = useContext(Context)
  return (
    <form onSubmit={(e) =>addNewPost(e)} className="add-form">
      <label htmlFor="legend">New post</label>
      <textarea placeholder="Say what is in your mind..." name="legend" cols="30" rows="10" ></textarea>
      <label htmlFor="picture">Picture url</label>
      <input type="url" name="picture" placeholder="Paste an URL here..."/>
      <button>Post</button>
    </form>
  )
}

export default Add
