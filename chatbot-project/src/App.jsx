import { useState} from 'react'
import './App.css'
import {ChatbotInput} from './components/chatinput.jsx'
import {UserMessage} from './components/usermessage.jsx'
import   {ChatMessage} from './components/chatMessage.jsx'
     
   function App() {
     const [chatMessages, setChatMessages] =useState([
  { message: "Hello! How can I help you today?", sender: "bot", id: 'initial' },
]);;
        return (
          <div className="app-container">
            <ChatMessage chatMessages={chatMessages}/>
            <ChatbotInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
