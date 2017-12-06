import React from 'react';
import GuessForm from './guess-form';
import GuessList from './guess-list';
import Feedback from './feedback';
import GuessCount from './guess-count';
import './game.css'

export default class Game extends React.Component {
	constructor() {
		super()

		this.state={
			guesses: []
		}

		this.addGuess = this.addGuess.bind(this)
		}

		addGuess(userGuess) {
			this.state.guesses.push(userGuess)
			this.setState({guesses: this.state.guesses})

			if(userGuess == this.winningNumber) {
				this.setState({guessFeedback: 'Winner'})
			} else if(userGuess > this.winningNumber && userGuess < this.winningNumber + 10) {
				this.setState({guessFeedback: 'Burning Up'})
			} else if(userGuess < this.winningNumber && userGuess > this.winningNumber - 10) {
				this.setState({guessFeedback: 'I can see flames'})
			} else if(userGuess < this.winningNumber && userGuess > this.winningNumber - 20 ) {
				this.setState({guessFeedback: 'warm'})
			} else if(userGuess > this.winningNumber && userGuess < this.winningNumber + 20) {
				this.setState({guessFeedback: 'warm'})
			} else {
				this.setState({guessFeedback: 'Cold'})
			}
		}

		componentDidMount() {
			this.winningNumber = Math.floor(Math.random() * 100) + 1; 
			this.winningNumber = this.winningNumber
			console.log(this.winningNumber)
		}


	render() {
		return (
		<div id="game-section">
			
			<h1>Hot or Cold</h1>
			<div id="game-container">
				<Feedback guessFeedback={this.state.guessFeedback}/>
				<GuessForm addGuess={this.addGuess} />
				<GuessCount guesses={this.state.guesses}/>
				<GuessList allGuesses={this.state.guesses} />
			</div>

		</div>
		);
	}
}