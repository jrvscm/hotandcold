import React from 'react';
import './feedback.css';

export default function Feedback({guessFeedback}) {

	return (
		
		<div id="userFeedback">	
			<span>{guessFeedback}</span>
		</div>
	
	);
}