import React from 'react';
import matchingMessages from '../data/matching_messages.json';

const MatchingMessages = () => {
    return (
        <div>
            <h2>Matching Messages</h2>
            <ul>
                {matchingMessages.map((message, index) => (
                    <li key={index}>
                        <strong>Telegram Message:</strong> {message.Telegram_message}<br />
                        <strong>GDELT Message:</strong> {message.GDELT_message}<br />
                        <strong>Word Match Percentage:</strong> {message.word_match_percentage}<br />
                        <strong>Mutual Words:</strong> {message.mutual_words}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchingMessages;