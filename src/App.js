import React, { useState, useEffect } from "react"
import './App.css';
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Messages from "./Message";
import { db } from "./firebase";
import firebase from "firebase"
import Flipmove from "react-flip-move"
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState('')
  console.log(input)
  console.log(messages)

  useEffect(() => {
    setUserName(prompt("Please Enter Your Name"))
  }, [])

  useEffect(() => {
    db.collection("messages")
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [input])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      userName: userName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">

      {/* <h1>Hello Everyone</h1> */}
      <img className={"Logo"} src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png'} />
      <h1>Welcome {userName} </h1>
      <form className={'App_Form'}>
        <FormControl className={'App_formControl'} >

          <Input className={'app_Input'} placeholder="Enter a Message ..." value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className='app_iconButton' variant="contained" disabled={!input} color="primary" onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      <Flipmove>
        {
          messages.map(({ message, id }) => {
            return (
              <Messages key={id} userName={userName} message={message} />

            )
          })
        }

      </Flipmove>

    </div>

  );
}

export default App;
