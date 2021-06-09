import React, { useState, useEffect } from "react"
import './App.css';
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Messages from "./Message";

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { username: "Ali", text: "han janu" },


  ])
  const [userName, setUserName] = useState('')
  console.log(input)
  console.log(messages)

  useEffect(() => {
    setUserName(prompt("Please Enter Your Name"))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, { username: userName, text: input }])
    setInput('')
  }

  return (
    <div className="App">

      <h1>Hello Everyone</h1>
      <h4>Welcome {userName}</h4>
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
            <Messages userName={userName} message={message} />

          )
        })
      }
    </div>

  );
}

export default App;
