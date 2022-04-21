import React from 'react';

interface ChatProps {
    message: string;
    author: string;
    date: string;
}

function Card({message,author, date}:ChatProps ) {
    return (
        <div className="card">
            <p>{message}</p>
            <p>{author}</p>
            <p>{date}</p>

        </div>
    );
}

export default Card;