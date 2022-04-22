import React from 'react'
import { Link } from 'react-router-dom'


function ChattingLeft(props) {
  return (
    <li className="mb-3 d-flex flex-row align-items-end">
        <div className="max-width-70">
          <div className="user-info mb-1">
            <img className="avatar sm rounded-circle me-1" src={props.cl_img} alt="avatar" />
            <span className="text-muted small">{props.cl_dateTime}</span>
          </div>
          <div className="card border-0 p-3">
            <div className="message">{props.cl_msg}</div>
          </div>
        </div>
        
        {/* ================= CHAT OPTIONS =================== */}
        <div className="btn-group">
          <Link to="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="icofont-bubble-down fs-4"></i></Link>
          <ul className="dropdown-menu border-0 shadow">
            <li><Link className="dropdown-item" to="#">Edit</Link></li>
            <li><Link className="dropdown-item" to="#">Share</Link></li>
            <li><Link className="dropdown-item" to="#">Delete</Link></li>
          </ul>
        </div>
      </li>
  )
}

export default ChattingLeft;