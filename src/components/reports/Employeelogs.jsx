import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'

import img_logo11 from "../../images/avatar1.svg";

const Employee_logs = () => {
    return (
        <>
            <div id="timetracker-layout" className="theme-mist">
                <Sidebar />

                <div className="main px-lg-4 px-md-4">
                    <Header />

                    <div className="body d-flex py-lg-3 py-md-2">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="h4 mb-0">Employee Logs</h3>
                                    </div>
                                </div>
                            </div> {/* Row end  */}
                            <div className="row g-3 mb-3">
                                <div className="col-lg-2">
                                    <label className="form-label">Employee</label>
                                    <select className="form-select">
                                        <option selected>Phil Glover</option>
                                        <option value={1}>Robert Anderson</option>
                                        <option value={2}>Ryan Randall</option>
                                        <option value={3}>Ryan Stewart</option>
                                        <option value={4}>Sally Graham</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <label className="form-label">Log Period</label>
                                    <select className="form-select">
                                        <option selected>Custom</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Week</option>
                                        <option value={3}>Month</option>
                                    </select>
                                </div>
                                <div className="col-lg-3">
                                    <label className="form-label">From</label>
                                    <input type="date" className="form-control" defaultValue="2021-12-27" />
                                </div>
                                <div className="col-lg-3">
                                    <label className="form-label">To</label>
                                    <input type="date" className="form-control" defaultValue="2021-12-29" />
                                </div>
                                <div className="col-lg-2">
                                    <label className="form-label">Show Logs</label>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                            <div className="row clearfix g-3">
                                <div className="col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr className="text-center">
                                                        <th>Employee</th>
                                                        <th>Project</th>
                                                        <th>Start Date</th>
                                                        <th>Start</th>
                                                        <th>End</th>
                                                        <th>Active Time</th>
                                                        <th>Idle Time</th>
                                                        <th>Total Time</th>
                                                        <th>Activity Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center">
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo11} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            27 Dec 2021
                                                        </td>
                                                        <td>
                                                            12:17
                                                        </td>
                                                        <td>
                                                            20:17
                                                        </td>
                                                        <td>
                                                            06:42
                                                        </td>
                                                        <td>
                                                            01:17
                                                        </td>
                                                        <td>
                                                            07:59
                                                        </td>
                                                        <td>
                                                            73
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo11} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            28 Dec 2021
                                                        </td>
                                                        <td>
                                                            10:24
                                                        </td>
                                                        <td>
                                                            15:37
                                                        </td>
                                                        <td>
                                                            02:32
                                                        </td>
                                                        <td>
                                                            02:40
                                                        </td>
                                                        <td>
                                                            05:13
                                                        </td>
                                                        <td>
                                                            38
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo11} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            28 Dec 2021
                                                        </td>
                                                        <td>
                                                            15:38
                                                        </td>
                                                        <td>
                                                            19:57
                                                        </td>
                                                        <td>
                                                            04:17
                                                        </td>
                                                        <td>
                                                            00:00
                                                        </td>
                                                        <td>
                                                            04:18
                                                        </td>
                                                        <td>
                                                            88
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo11} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            29 Dec 2021
                                                        </td>
                                                        <td>
                                                            10:13
                                                        </td>
                                                        <td>
                                                            17:42
                                                        </td>
                                                        <td>
                                                            04:43
                                                        </td>
                                                        <td>
                                                            02:45
                                                        </td>
                                                        <td>
                                                            07:28
                                                        </td>
                                                        <td>
                                                            49
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo11} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            29 Dec 2021
                                                        </td>
                                                        <td>
                                                            17:43
                                                        </td>
                                                        <td>
                                                            18:39
                                                        </td>
                                                        <td>
                                                            00:56
                                                        </td>
                                                        <td>
                                                            00:00
                                                        </td>
                                                        <td>
                                                            00:56
                                                        </td>
                                                        <td>
                                                            90
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* Row End */}
                        </div>
                    </div>




                </div>
            </div>


        </>
    )
}

export default Employee_logs;