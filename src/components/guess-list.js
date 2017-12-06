import React from 'react';
import './guess-list.css';

export default function GuessList({ allGuesses }) {
	return(
			<ul id="guessList">
				{allGuesses.map((guess, index) => (
					<li id={index} key={index}>{guess}</li>
				))}
			</ul>
	);
}