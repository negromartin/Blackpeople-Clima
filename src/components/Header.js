import React from 'react';
import './style/header.css'; 

export default function Header({titulo}){
	return(<div>
			<nav>
				<div className="nav-wrapper header  darken-2">
					<a href="#!" className="brand-logo Titulo">{titulo}</a>

				</div>

			</nav>
			</div>
		)


}