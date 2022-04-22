import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar px-4 py-4 py-md-5 me-0">
        <div className="d-flex flex-column h-100">

          <Link to="index-2.html" className="mb-0 brand-icon">
            <span className="logo-icon">
              <i className="icofont-stopwatch fs-2" />
            </span>
            <span className="logo-text">Time-Tracker</span>
          </Link>

          {/* ============= MAIN MENU ================== */}
          <ul className="menu-list flex-grow-1 mt-5 mb-3">
            <li><Link className="m-link active" to="/"><i className="icofont-home fs-5" /> <span>Dashboard</span></Link></li>
            
            <li className="collapsed">
              <Link className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-report" to="#">
                <i className="icofont-chart-pie fs-5" /><span>Reports</span><span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
              </Link>
               {/* ============= SUB MENU ================== */}
              <ul className="sub-menu collapse" id="menu-report">
                <li><Link className="ms-link" to="/attendance">Attendance</Link></li>
                <li><Link className="ms-link" to="/hourstrack">Hours Tracked</Link></li>
                <li><Link className="ms-link" to="/timeline">Timeline</Link></li>
                <li><Link className="ms-link" to="/employee_logs">Employee Logs</Link></li>
              </ul>
            </li>
            
            <li><Link className="m-link" to="/screen"><i className="icofont-computer fs-5" /> <span>Screencasts</span></Link></li>
            
            <li className="collapsed">
              <Link className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-order" to="#">
                <i className="icofont-tasks fs-5" /> <span>Projects</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
              </Link>

              <ul className="sub-menu collapse" id="menu-order">
                <li><Link className="ms-link" to="projects.html">Project List</Link></li>
                <li><Link className="ms-link" to="/employee">Employee</Link></li>
                <li><Link className="ms-link" to="task.html">Task Progress</Link></li>
                <li><Link className="ms-link" to="/ticketlist">Ticket List</Link></li>
                <li><Link className="ms-link" to="/ticketdetail">Ticket Details</Link></li>
                <li><Link className="ms-link" to="/timesheet">Timesheet</Link></li>
              </ul>
            </li>

            <li className="collapsed">
              <Link className="m-link" data-bs-toggle="collapse" data-bs-target="#app" to="#">
                <i className="icofont-code-alt fs-5" /> <span>App</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
              </Link>
              <ul className="sub-menu collapse" id="app">
                {/* <li><Link className="ms-link" to="calendar.html">Calandar</Link></li> */}
                <li><Link className="ms-link" to="/chat"> Communication</Link></li>
                <li><Link className="ms-link" to="/calandar"> Calandar</Link></li>
              </ul>
            </li>
            
          </ul>
          {/* Menu: menu collepce btn */}
          <button type="button" className="btn btn-link sidebar-mini-btn text-light">
            <span className="ms-2"><i className="icofont-bubble-right" /></span>
          </button>
        </div>
      </div>
  )
}

export default Sidebar