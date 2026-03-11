  import { useState} from 'react'
  import { Chatbot } from 'supersimpledev';


  export function ChatbotInput({ chatMessages, setChatMessages }) {
        const [isLoading, setIsLoading] = useState(false);
        const [inputText, setInputText] = useState("");

        function saveInput(event) {
          setInputText(event.target.value);
        }
        function handleKeyDown(event) {
          if (event.key === "Enter") {
            reciveMessage();
          } else if (event.key === "Escape") {
            setInputText("");
          }
        }
        async function reciveMessage() {
          if (isLoading || inputText === "") {
            return;
          }

          setIsLoading(true);
          setInputText("");

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newChatMessages);
          setChatMessages([
            ...newChatMessages,
            {
              message: "loading",
              sender: "bot",
              id: crypto.randomUUID(),
            },
          ]);

          const response = await Chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "bot",
              id: crypto.randomUUID(),
            },
          ]);
          setIsLoading(false);
        }

        return (
          <div className="chat-input">
            <input
              placeholder="send message to the chatbot"
              size="30"
              onChange={saveInput}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="text-box"
            />
            <button onClick={reciveMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }