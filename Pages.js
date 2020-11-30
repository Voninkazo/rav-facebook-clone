import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuStyles = styled.ul`
	display: flex;
	list-style: none;
	gap: 20px;
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

export default function Pages() {
  return (
    <MenuStyles>
        <Link to="/">
			<li>Feed</li>
		</Link>
		<Link to="/add">
			<li>Add a post</li>
		</Link>
		<Link to="/username">
			<li>Username</li>
		</Link>
    </MenuStyles>
  )
}
