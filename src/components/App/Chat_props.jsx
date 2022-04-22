import React from 'react'
import { Link } from 'react-router-dom'

function Chat_props(props) {
    return (
        <li className="list-group-item px-md-4 py-3 py-md-4">
            <Link to="#" className="d-flex">
                <img className="avatar rounded" src={props.chats_image}  alt="props.chats_thumbName" />
                <div className="flex-fill ms-3 text-truncate">
                    <h6 className="d-flex justify-content-between mb-0"><span>{props.chats_name}</span> <small className="msg-time">{props.chats_time}</small></h6>
                    <span className="text-muted">{props.chats_textMsg}</span>
                </div>
            </Link>
        </li>
    )
}

export default Chat_props;