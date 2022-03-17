import React from 'react';
import data from '../../data.json';
import Card from "../card/Card";



function Chat() {
    return (
        <div className="Chat">
           <p>VOCO CHAT 0.0.1</p>

            {data.map((item) => {
                return (<Card
            message={item.message}
            author={item.username}
            date={item.date} />)
                })}
        </div>
    );
}

export default Chat;