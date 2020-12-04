import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import styled from 'styled-components';

const AddCommentFormStyles = styled.form`
	display: flex;
	grid-gap: 10px;
	justify-content: space-between;
	background: #c4c4c4;
	padding: 0.6rem;
	border-radius: 28px;
	input {
		background: none;
		border: none;
		width: 100%;
	}
`;

function AddComents({post}) {
  const [newCommentText,setNewCommentText] = useState('');
  const {state,dispatch} = useContext(Context);
  const {currentUser} = state;

   function AddComments(e) {
    e.preventDefault();
    const newComment ={
      id: Date.now(),
			userId: currentUser,
			date: Date.now(),
      text: newCommentText,
      // userName: currentUser.userName,
    }
    dispatch({ type: 'ADD_COMMENT_TO_POST', id: post.id, newComment });
		setNewCommentText('');
  }

  return (
    <AddCommentFormStyles onSubmit={AddComments} className="submit_comments_form">
			<input
				type="text"
				value={newCommentText}
				onChange={e => setNewCommentText(e.target.value)}
				placeholder="Type your comment here"
				required
			/>
			<button>Post</button>
		</AddCommentFormStyles>
  )
}

export default AddComents
