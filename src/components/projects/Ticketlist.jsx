import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'

import img_logo1 from "../../images/avatar666.svg";
import img_logo2 from "../../images/avatar222.svg";
import img_logo3 from "../../images/avatar5.svg";
import img_logo4 from "../../images/avatar3.svg";
import img_logo5 from "../../images/avatar7.svg";
import img_logo6 from "../../images/avatar4.svg";
// import { Link } from 'react-router-dom';

const Ticketlist = () => {
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
                                        <h3 className="h4 mb-0">Tickets</h3>
                                        <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                                            <button type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#tickadd"><i className="icofont-plus-circle me-2 fs-6" />Add Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* Row end  */}
                            <div className="row clearfix g-3">
                                <div className="col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">


                                            {/*  */}
                                            {/* <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="dataTables_length" id="myProjectTable_length">
                                                        <label>Show<select name="myProjectTable_length" aria-controls="myProjectTable" className="form-select form-select-sm">
                                                            <option value={10}>10</option>
                                                            <option value={25}>25</option>
                                                            <option value={50}>50</option>
                                                            <option value={100}>100</option>
                                                        </select>entries</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="myProjectTable_filter" className="dataTables_filter">
                                                        <label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="myProjectTable" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/*  */}


                                            <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Tickit Id</th>
                                                        <th>Subject</th>
                                                        <th>Assigned</th>
                                                        <th>Created Date</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-0002</a>
                                                        </td>
                                                        <td>
                                                            Internet Not Working
                                                        </td>
                                                        <td>
                                                        
                                                            <img className="avatar rounded-circle" src={img_logo1} alt="" />
                                                            <span className="fw-bold ms-1">Joan Dyer</span>
                                                        </td>
                                                        <td>
                                                            12/03/2021
                                                        </td>
                                                        <td><span className="badge bg-warning">In Progress</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-0006</a>
                                                        </td>
                                                        <td>
                                                            Salary Amount wrong
                                                        </td>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo2} alt="" />
                                                            <span className="fw-bold ms-1">Ryan	Randall</span>
                                                        </td>
                                                        <td>
                                                            12/03/2021
                                                        </td>
                                                        <td><span className="badge bg-warning">In Progress</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-0004</a>
                                                        </td>
                                                        <td>
                                                            Mouse Not working
                                                        </td>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo3} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            16/03/2021
                                                        </td>
                                                        <td><span className="badge bg-warning">In Progress</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-00011</a>
                                                        </td>
                                                        <td>
                                                            punching time not proper
                                                        </td>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo4} alt="" />
                                                            <span className="fw-bold ms-1">Victor Rampling</span>
                                                        </td>
                                                        <td>
                                                            25/02/2021
                                                        </td>
                                                        <td><span className="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-00021</a>
                                                        </td>
                                                        <td>
                                                            Leave Balance Wrong
                                                        </td>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo5} alt="" />
                                                            <span className="fw-bold ms-1">Sally Graham</span>
                                                        </td>
                                                        <td>
                                                            16/02/2021
                                                        </td>
                                                        <td><span className="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="ticket-detail.html" className="fw-bold text-secondary">#Tc-00041</a>
                                                        </td>
                                                        <td>
                                                            Display Blur
                                                        </td>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo6} alt="" />
                                                            <span className="fw-bold ms-1">Robert Anderson</span>
                                                        </td>
                                                        <td>
                                                            18/01/2021
                                                        </td>
                                                        <td><span className="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#edittickit"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                            {/*  */}
                                            {/* <div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div className="dataTables_info" id="myProjectTable_info" role="status" aria-live="polite">
                                                        Showing 1 to 6 of 6 entries
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-7">
                                                    <div className="dataTables_paginate paging_simple_numbers" id="myProjectTable_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button page-item previous disabled" id="myProjectTable_previous">
                                                                <Link to="#" aria-controls="myProjectTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</Link>
                                                            </li>
                                                            <li className="paginate_button page-item active">
                                                                <Link to="#" aria-controls="myProjectTable" data-dt-idx={1} tabIndex={0} className="page-link">1</Link>
                                                            </li>
                                                            <li className="paginate_button page-item next disabled" id="myProjectTable_next">
                                                                <Link to="#" aria-controls="myProjectTable" data-dt-idx={2} tabIndex={0} className="page-link">Next</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/*  */}




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

export default Ticketlist