import React,{useContext} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Context} from './Context';

const MenuStyles = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-between;
	padding : 0;
	a {
		text-decoration: none;
		font-size: 36px;
		line-height: 42px;
		color: #000000;
		font-weight: normal;
	}
	a:hover {
		color: red;
	}
	a:focus {
		font-weight: bold;
	}
`;

const ProfileLinkStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

export default function Pages() {
	const { state } = useContext(Context);
	const { users, currentUser } = state;
	const currentUserObj = users.find(user => user.userId === currentUser);

  return (
    <MenuStyles>
        <Link to="/">
			<li>Feed</li>
		</Link>
		<Link to="/add">
			<li>Add a post</li>
		</Link>
		<li>
			{!currentUserObj && 'Loading...'}
				{currentUserObj && (
					<Link to="/username">
					<ProfileLinkStyles>
						<span>{currentUserObj.userName}</span>
							<img
								src={currentUserObj.profileUrl}
								alt={`Profile pic of ${currentUserObj.userName}`}
							/>
					</ProfileLinkStyles>
					</Link>
			)}
		</li>
    </MenuStyles>
  )
}
