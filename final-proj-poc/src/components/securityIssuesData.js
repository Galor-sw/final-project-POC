import React from 'react';
import gdeltMessages from '../data/classified_messages_gdelt_articles.json';
import telegramMessages from '../data/classified_messages_telegram_messages.json';

const SecurityIssuesData = () => {
    // Counting the total number of elements and security issue elements for Telegram data
    const telegramTotalCount = telegramMessages.length;
    const telegramSecurityIssueCount = telegramMessages.filter(message => message.classification === "Security Issue").length;

    // Counting the total number of elements and security issue elements for GDELT data
    const gdeltTotalCount = gdeltMessages.length;
    const gdeltSecurityIssueCount = gdeltMessages.filter(message => message.classification === "Security Issue").length;

    return (
        <div className="border-t border-gray-300 pt-4 pb-4 border-b border-gray-300 pb-5">
            <h2 className="text-xl font-bold mb-4">Security Issues Data</h2>
            <p>Telegram: {telegramSecurityIssueCount}/{telegramTotalCount} security messages</p>
            <p>GDELT: {gdeltSecurityIssueCount}/{gdeltTotalCount} security messages</p>
        </div>
    );
};

export default SecurityIssuesData;
