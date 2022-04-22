import React from 'react'
import { Link } from 'react-router-dom'


function ChattingRight(props) {
  return (
    <li className="mb-3 d-flex flex-row-reverse align-items-end">
      <div className="max-width-70 text-right">
        <div className="user-info mb-1">
          <span className="text-muted small">{props.cr_dateTime}</span>
        </div>
        <div className="card border-0 p-3 bg-primary text-light">
          <div className="message">{props.cr_msg}</div>
        </div>
      </div>

      {/* ================= CHAT OPTIONS =================== */}
      <div className="btn-group">
        <Link to="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i class="icofont-bubble-down fs-4"></i></Link>
        <ul className="dropdown-menu border-0 shadow">
          <li><Link className="dropdown-item" to="#">Edit</Link></li>
          <li><Link className="dropdown-item" to="#">Share</Link></li>
          <li><Link className="dropdown-item" to="#">Delete</Link></li>
        </ul>
      </div>
    </li>
  )
}

export default ChattingRight;