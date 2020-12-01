import React, { useContext } from 'react'

import {Context} from '../Context'

function Add() {
  const {addNewPost} = useContext(Context)
  return (
    <form onSubmit={(e) =>addNewPost(e)}>
      <label htmlFor="legend">New post</label>
      <textarea placeholder="Say what is in your mind..." name="legend" cols="30" rows="10" ></textarea>
      <label htmlFor="picture">Piccture url</label>
      <input type="url" name="picture" id=""/>
      <button>Post</button>
    </form>
  )
}

export default Add
