import React from 'react'

function Username() {
  return (
    <form>
      <input type="text" name="username"  placeholder="Your username"/>
      <input type="url" name="profile" placeholder="Your picture url" />
      <button>Save</button>
    </form>
  )
}

export default Username
