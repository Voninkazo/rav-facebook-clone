import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Context';
import styled from 'styled-components';

const FormStyle = styled.form`
	display: grid;
	gap: 10px;
	grid-template-columns: 200px;
	textarea {
		height: 100px;
	}
`;

export default function ProfileOptions() {
	const {state,dispatch } = useContext(Context);
	const {users,currentUser} = state;
	const [userName, setUserName] = useState('');
	const [profilePictureUrl, setProfilePictureUrl] = useState('https://picsum.photos/100');	

	// we get the full current user object back, so we have a name and picture instead of just an id
const currentUserObj = users.find(user => user.userId === currentUser) || {
    userName: '',
    profileUrl: '',
};
function handleNewOptions(e) {
    e.preventDefault();
    dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePictureUrl });
	alert('Profile updated successfully');
	console.log(profilePictureUrl)
}

useEffect(() => {
    setUserName(currentUserObj.userName);
    setProfilePictureUrl(currentUserObj.profileUrl);
}, [users]);

	return (
		<div>
			<h2>Profile Options</h2>
			<FormStyle onSubmit={handleNewOptions} className="profile_form">
				<input
					type="text"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					required
				/>
				<input
					type="url"
					value={profilePictureUrl}
					onChange={e => setProfilePictureUrl(e.target.value)}
					required
				/>
				<button>Save</button>
			</FormStyle>
		</div>
	);
}