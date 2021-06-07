import React, { useState, useEffect } from "react"
import './App.css';
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Messages from "./Message";

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  console.log(input)
  console.log(messages)


  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">

      <h1>Hello Everyone</h1>
      <form>
        <FormControl>
          <InputLabel >Enter Message</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
          <Button variant="contained" disabled={!input} color="primary" onClick={sendMessage}>Send Message</Button>

        </FormControl>
      </form>
      {
        messages.map(message => {
          return (
            <Messages text={message} />

          )
        })
      }
    </div>

  );
}

export default App;
