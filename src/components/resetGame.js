import React from 'react';
import './resetGame.css';

export default function ResetGame({ resetGame }) {

	return(
			<div id="resetButton">
				<button onClick={(event) => {
					window.location.reload();
				}}>Reset</button>
			</div>
		);

}