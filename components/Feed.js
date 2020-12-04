import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import Likes from './Likes';
import AddComments from './AddComents';

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
  const {state} = useContext(Context);
  const {allPosts,users,currentUser} = state;
  const currentUserObj = users.find(user => user.userId === currentUser);

  const generatePost = allPosts.map(post => {
    const postedDate =new Date(Number(post.date))
    return(
      <DiveStyles key={post.id}>
        <ul className="post_container" >
          <li>
            <img className="main_profile_img" src={currentUserObj.profileUrl} alt="Profile photo"/>
            <span>{currentUserObj.userName}</span>
          </li>
          <li>
            {postedDate.toLocaleDateString()}
          </li>
        </ul>
        <div>
          <p>{post.legend}</p>
          <img className="posted_img" src={post.image} alt="Image post"/>
         <div className="vote_container">
           <Likes post={post} />
         </div>
        </div>
        <div>
            {
            post.comments.map(com => {
                const postedOn = new Date(Number(com.date));
                const commentUserObj = users.find(user => user.userId == currentUser);
                console.log(commentUserObj)
                return(
                  <>
                    <div key={com.date}>
                      <ul className="comments_container">
                          <li>
                            <img className="sub_profile_img" src={commentUserObj.profileUrl} alt="Profile photo"/>
                            <span>{commentUserObj.userName}</span>
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
       <AddComments post={post}/>
      </DiveStyles>
    )
  })
  return (
    <div>
      <h3>Home</h3>
      {generatePost}
    </div>
  )
}

export default Feed