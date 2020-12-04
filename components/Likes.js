import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';

const PostLikesStyles = styled.div`
	display: flex;
	gap: 10px;
`;

function Likes({post}) {
const {state,dispatch} = useContext(Context);
const {currentUser} = state;

    function hasAlredyLiked() {
console.log("....")
return post.likes.some(like => like.userId === currentUser)
    }

    function handleClickNewLike() {
        const newLike = {
            id: Date.now(),
            userId: currentUser,
        }
        dispatch({type: "LIKE_POST", newLike, id: post.id})
    }

    function unlikePost() {
        dispatch({type: "UNLIKE_POST",id: post.id })
    }

  return (
    <PostLikesStyles>
			{hasAlredyLiked() ? (
				<button onClick={unlikePost} className="like-btn">UnLike</button>
			) : (
				<button onClick={handleClickNewLike} className="like-btn">Like</button>
			)}
			<span>{post.likes.length}</span>
	</PostLikesStyles>
  )
}

export default Likes
