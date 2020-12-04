import React, { useContext} from 'react';
import styled from 'styled-components';
import LikeIconFill from '../icons/thumb_up.svg';
import LikeIconBorder from '../icons/thumb_down.svg';

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
				<img src={LikeIconFill} className="icon-like" onClick={unlikePost} alt="unlike" />
			) : (
				<img src={LikeIconBorder} className="icon-like" onClick={handleClickNewLike} alt="like" />
			)}
			<span>{post.likes.length}</span>
	</PostLikesStyles>
  )
}

export default Likes
