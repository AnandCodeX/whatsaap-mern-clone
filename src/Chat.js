/** @format */

import { Avatar, IconButton } from "@material-ui/core";
import {
	AttachFile,
	InsertEmoticon,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState } from "react";
import "./Chat.css";
import axios from "axios";

function Chat({ messages }) {
	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:9000/messages/new", {
			message: input,
			name: " Demo Name",
			timestamp: "Jst Now .....",
			received: true,
		});
		setInput("");
	};

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar />
				<div className='chat__headerInfo'>
					<h3>Room Name</h3>
					<p>Last seen at....</p>
				</div>
				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className='chat__body'>
				{messages.map((message) => (
					<p className={`chat__message ${message.received && "chat__reciver"}`}>
						<span className='chat__name'>{message.name}</span>
						{message.message}
						<span className='chat__timestamp'>{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className='chat__footer'>
				<InsertEmoticon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type message'
						type='text'
					/>
					<button onClick={sendMessage} type='submit'>
						Send Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
