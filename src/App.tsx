import React, {useEffect} from 'react';
import './App.css';
import Chat from "./components/chat/Chat";
import {disconnectSocket, connectToServer} from "./socket.service";
/*import voco from './voco.svg';*/



function App() {
    useEffect(() => {

        connectToServer();
        return () => {
            disconnectSocket();
        }
    }, []);





    return (
    <div className="class-test">
        <div className="voco">
            VOCO </div>

    <div className="chat-container"> <Chat/>

    </div>

    </div>

  );
}

export default App;
