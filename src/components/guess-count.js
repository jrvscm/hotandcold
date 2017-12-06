import React from 'react';
import './guess-count.css';

export default function GuessCount({guesses}) {
	return (
		<div id="guessCount">
			<span>Guesses: {guesses.length}</span>
		</div>
		
	);
}