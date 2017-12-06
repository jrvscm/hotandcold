import React from 'react';

import './guess-form.css';

export default function GuessForm({ addGuess }) {
		return (
		<div id="form-container">
			<form id="the-guess-form" onSubmit={(event) => {
				event.preventDefault()
				const userGuess = event.target.userGuess.value
				addGuess(userGuess)
				event.target.userGuess.value = ''
			}}>
				<input type="number" id="userGuess" name="userGuess" placeholder="Enter Your Guess" required />
				<button type="submit" id="submit-guess-button">Guess</button>
			</form>
		</div>
		);
}