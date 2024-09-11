import { useState } from "react";

function Form() {
    const [message, setMessage] = useState(""); // State for input value
  
    const handleChange = (event) => {
      setMessage(event.target.value); // Update state based on input
    };
  
    return (
      <div>
        <input
          value={message}
          onChange={handleChange}
          placeholder="Type a message"
        />
        <p>Your message: {message}</p>
      </div>
    );
  }

export default Form;