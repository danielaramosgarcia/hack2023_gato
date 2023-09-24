import React , {useState, useEffect} from "react";
import styles from "./styles.module.css";
import { GiAtom } from "react-icons/gi";
import { PiGraph } from "react-icons/pi";
import { BiCoinStack } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

import axios from "axios";

function Descubrir() {
  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSendClick = async () => {
    try {
      // Add the user's message to the conversation
      const userMessage = { role: 'user', content: inputValue };
      const updatedConversation = [...conversation, userMessage];
      setConversation(updatedConversation);
  
      // Send the messages to the GPT API
      console.log("Loading...");
      const response = await axios.post('https://gato-h7wa.onrender.com/generate-chat', {
        messages: updatedConversation
      }).catch((error) => {
        console.error('Error fetching response from GPT API:', error);
      });
  
      // Log the response (stringify for better readability)
      console.log(response);
      setInputValue('');

      const assistantMessage = { role: 'assistant', content: response.data };
      const updatedConversationWithResponse = [...updatedConversation, assistantMessage];
      setConversation(updatedConversationWithResponse);

    } catch (error) {
      console.error('Error sending request to GPT API:', error);
    }
  };
  
  
  return (
    <div className={styles.container}>
      <h1>Descubre nuevos retos para tu conocimiento!</h1>


      { conversation.length==0 ? <div className={styles.row}>
        <div className={styles.moduloSugerencia}>
          <GiAtom className={styles.icon} />
          <div className={styles.text}>
            Créame una lección sobre mecánica cuántica
          </div>
        </div>
        <div className={styles.moduloSugerencia}>
          <PiGraph className={styles.icon} />
          <div className={styles.text}>
            Quiero aprender ciencias computacionales
          </div>
        </div>
        <div className={styles.moduloSugerencia}>
          <BiCoinStack className={styles.icon} />
          <div className={styles.text}>
            Ayudame a saber mas de como cuidar de mi dinero
          </div>
        </div>
      </div> : <div className={styles.row}/>
      }
      
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {conversation.map((message, index) => (
          <div key={index} className={styles.message}>
            {message.role === 'user' ? (
              <div className={styles.userMessage}>{message.content}</div>
            ) : (
              <div className={styles.assistantMessage}>{message.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputRow}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <IoSend className={styles.icon} onClick={handleSendClick} />
      </div>
    </div>
  );
}

export default Descubrir;
