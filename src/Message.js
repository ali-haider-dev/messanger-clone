import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import "./Message.css"
const Message = forwardRef(({ message, userName }, ref) => {
    const isUser = userName === message.userName
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'} `}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.userName || 'Unknown User'}: `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
})

export default Message
