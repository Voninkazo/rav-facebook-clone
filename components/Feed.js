import React, { useContext } from 'react';
import styled from 'styled-components';

const DiveStyles = styled.div`
  .post_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    li:nth-of-type(1) {
      display: flex;
      align-items: center;
      span {
        margin-left: 20px;
        font-weight: bold;
      }
    }
  }
`;

import {Context} from '../Context';

function Feed() {
  const {inputValue,addNewComents,userName,objLikes,profilePhoto} = useContext(Context)
  const {allPosts} = useContext(Context);
  
  const generatePost = allPosts.map(post => {
    const postedDate =new Date(Number(post.date))
    return(
      <DiveStyles>
        <ul className="post_container" key={post.id}>
          <li>
            <img className="main_profile_img" src={profilePhoto} alt="Profile photo"/>
            <span>{userName}</span>
          </li>
          <li>
            {postedDate.toLocaleDateString()}
          </li>
        </ul>
        <div>
          {/* <p>{post.legend}</p> */}
          <img className="posted_img" src={post.image} alt="Image post"/>
         <div className="vote_container">
           <button type="button">Like</button>
           {/* <span>{post.likes}</span> */}
         </div>
        </div>
        <div>
            {
            post.comments.map(com => {
                const postedOn = new Date(Number(com.date))
                return(
                  <>
                    <div key={com.id}>
                      <ul className="comments_container">
                          <li>
                            <img className="sub_profile_img" src={com.profile} alt="Profile photo"/>
                            <span>{com.username}</span>
                          </li>
                          <li>{postedOn.toLocaleDateString()}</li>
                      </ul>
                      <div>
                        <p>{com.text}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
        </div>
        <form className="submit_comments_form" onSubmit={addNewComents}>
          <input type="text" value={inputValue} onChange={addNewComents} name="comment" placeholder="Add a comment..."/>
          <button type="submit">Post</button>
        </form>
      </DiveStyles>
    )
  })
  return (
    <div>
      <h3>Here is feed</h3>
      {generatePost}
    </div>
  )
}

export default Feed
