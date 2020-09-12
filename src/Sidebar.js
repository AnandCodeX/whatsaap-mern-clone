import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar,IconButton } from '@material-ui/core'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat'


const sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                    </div>
                </div>
            <div className="sidebar__search">
<div className="sidebar__searchContainer">
<SearchOutlined/>
<input placeholder="Search" type="text"/>
</div>
            </div>
            <div className="sidebar__chats">
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>

            </div>
            </div>
        
    )
}

export default sidebar
