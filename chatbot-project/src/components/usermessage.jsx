import robotImage from '../assets/robot.png'
import profileImage from '../assets/user.png'

export function UserMessage({ message, sender }) {
        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-bot"
            }
          >
            {sender === "bot" && (
              <img src={robotImage} className="chat-profil" />
            )}
            <div className="chat-text">{message}</div>

            {sender === "user" && (
              <img src={profileImage} className="chat-profil" />
            )}
          </div>
        );
      }
