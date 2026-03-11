import {useRef,useEffect, } from 'react'
import { UserMessage } from "./usermessage.jsx";


export function ChatMessage({ chatMessages }) {
        const chatRef =useRef(null);
        useEffect(() => {
          const containerElem = chatRef.current;
          if (containerElem) {
            containerElem.scrollTop=containerElem.scrollHeight;
          }
        }, [chatMessages]);
 
        return (
          <div className="chat-messages-countainer" ref={chatRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <UserMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }