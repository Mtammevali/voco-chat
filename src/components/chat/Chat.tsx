import React from 'react';
import Card from "../card/Card";
import Input from "../input/Input";

function Chat() {
    return (
        <div>
           <p>VOCO CHAT 0.0.1</p>

            <div className="card"> <Card/> </div>
            <div className="card"> <Card/> </div>
            <div className="card"> <Card/> </div>
            <div className="card"> <Card/> </div>
            <div className="input"> <input/></div>
        </div>
    );
}

export default Chat;