import React from 'react'
import { Link } from 'react-router-dom'

function Office_props(props) {
    return (
        <li className="list-group-item px-md-4 py-3 py-md-4">
        <Link to="#" className="d-flex">
          <div className="avatar rounded no-thumbnail">{props.office_thumbnailImg}</div>
          <div className="flex-fill ms-3 text-truncate">
            <h6 className="d-flex justify-content-between mb-0"><span>{props.office_title}
              </span> <small className="msg-time">{props.office_date}</small></h6>
            <span className="text-muted">{props.office_msg}</span>
          </div>
        </Link>
      </li>
    )
}

export default Office_props