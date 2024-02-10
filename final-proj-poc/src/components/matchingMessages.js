import React, { useState } from 'react';
import matchingMessages from '../data/matching_messages.json';

const MatchingMessages = () => {
    const [expandedTelegram, setExpandedTelegram] = useState(Array(matchingMessages.length).fill(false));
    const [expandedGDELT, setExpandedGDELT] = useState(Array(matchingMessages.length).fill(false));
    const [showMutualWords, setShowMutualWords] = useState(Array(matchingMessages.length).fill(false));

    const toggleTelegram = (index) => {
        const newExpandedTelegram = [...expandedTelegram];
        newExpandedTelegram[index] = !newExpandedTelegram[index];
        setExpandedTelegram(newExpandedTelegram);
    };

    const toggleGDELT = (index) => {
        const newExpandedGDELT = [...expandedGDELT];
        newExpandedGDELT[index] = !newExpandedGDELT[index];
        setExpandedGDELT(newExpandedGDELT);
    };

    const toggleMutualWords = (index) => {
        const newShowMutualWords = [...showMutualWords];
        newShowMutualWords[index] = !newShowMutualWords[index];
        setShowMutualWords(newShowMutualWords);
    };

    return (
        <div className='p-5'>
            <h2 className="text-xl font-bold mb-4">Matching Messages: {matchingMessages.length}</h2>
            <ul>
                {matchingMessages.map((message, index) => (
                    <li key={index} className="border border-gray-300 p-4 mb-4">
                        <div><strong>Telegram:</strong> {expandedTelegram[index] ? message.Telegram_message : message.Telegram_message.slice(0, 150)}{message.Telegram_message.length > 150 && <div><button onClick={() => toggleTelegram(index)} className="text-blue-500">{expandedTelegram[index] ? "Less..." : "More..."}</button></div>}</div>
                        <div><strong>GDELT:</strong> {expandedGDELT[index] ? message.GDELT_message : message.GDELT_message.slice(0, 150)}{message.GDELT_message.length > 150 && <div><button onClick={() => toggleGDELT(index)} className="text-blue-500">{expandedGDELT[index] ? "Less..." : "More..."}</button></div>}</div>
                        <div><strong>Matching Rank:</strong> {message.word_match_percentage}</div>
                        <div>{showMutualWords[index] && <div><strong>Mutual Words:</strong> {message.mutual_words.join(', ')}</div>}</div>
                        <div><button onClick={() => toggleMutualWords(index)} className="text-blue-500">{showMutualWords[index] ? "Hide Mutual Words" : "Show Mutual Words"}</button></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchingMessages;
