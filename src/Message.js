import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import "./Message.css"
function Message({ message, userName }) {
    const isUser = userName === message.username
    return (
        <div className={`message ${isUser && 'message_user'} `}>
            <Card className={isUser ? "message-card" : "message-guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {message.username}:{message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Message
