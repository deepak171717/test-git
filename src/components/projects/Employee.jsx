// import React,{useEffect} from 'react'
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';


import img_logo1 from "../../images/avatar666.svg";
import img_logo2 from "../../images/avatar222.svg";
import img_logo3 from "../../images/avatar5.svg";
import img_logo4 from "../../images/avatar3.svg";
import img_logo5 from "../../images/avatar7.svg";
import img_logo6 from "../../images/avatar4.svg";
import img_logo7 from "../../images/avatar1.svg";


// import $ from "jquery";

const Employee = () => {

    // useEffect(() => {

    //     $(document).ready(function () {
    //         $('#myProjectTable')
    //             .addClass('nowrap')
    //             .dataTable({
    //                 responsive: true,
    //                 columnDefs: [
    //                     { targets: [-1, -3], className: 'dt-body-right' }
    //                 ]
    //             });
    //         $('.deleterow').on('click', function () {
    //             var tablename = $(this).closest('table').DataTable();
    //             tablename
    //                 .row($(this)
    //                     .parents('tr'))
    //                 .remove()
    //                 .draw();

    //         });
    //     });

    // }, [])


    return (
        <>
            <div id="timetracker-layout" className="theme-mist">
                <Sidebar />
                <div className="main px-lg-4 px-md-4">
                    <Header />

                    <div classname="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="h4 mb-0">Employee List</h3>
                                        <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                                            <button type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#addemp"><i className="icofont-plus-circle me-2 fs-6" />Add Employee</button>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            {/* Row end   */}
                            {/* <div className="row clearfix g-3"> */}

                            <div class="body d-flex py-lg-3 py-md-2">
                                <div className="col-sm-12">

                                    <div className="card mb-3">
                                        <div className="card-body">


                                       


                                            <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: "100%" }}>
                                                <thead>
                                                    <tr>
                                                        <th>Employee Name</th>
                                                        <th>Project</th>
                                                        <th>Total Task</th>
                                                        <th>Email</th>
                                                        <th>Project Assigned</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {/* <i className="icofont-plus-circle me-2 fs-6 deleterow" onClick={"click"}/> */}
                                                            <img className="avatar rounded-circle" src={img_logo1} alt="" />
                                                            <span className="fw-bold ms-1">Joan Dyer</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Box of Crayons</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">5 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">JoanDyer@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            23/02/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo2} alt="" />
                                                            <span className="fw-bold ms-1">Ryan	Randall</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Fast Cad</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">8 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">RyanRandall@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            14/04/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo3} alt="" />
                                                            <span className="fw-bold ms-1">Phil	Glover</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Gob Geeklords</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">2 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">PhilGlover@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            18/03/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo4} alt="" />
                                                            <span className="fw-bold ms-1">Victor Rampling</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Java Dalia</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">7 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">VictorRampling@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            18/06/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo5} alt="" />
                                                            <span className="fw-bold ms-1">Sally Graham</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Practice to Perfect</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">9 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">SallyGraham@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            13/01/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo6} alt="" />
                                                            <span className="fw-bold ms-1">Robert Anderson</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Rhinestone</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">5 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">RobertAnderson@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            14/01/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="avatar rounded-circle" src={img_logo7} alt="" />
                                                            <span className="fw-bold ms-1">Ryan	Stewart</span>
                                                        </td>
                                                        <td>
                                                            <a href="projects.html">Social Geek Made</a>
                                                        </td>
                                                        <td>
                                                            <a href="task.html">15 Task</a>
                                                        </td>
                                                        <td>
                                                            <a href="mailto:">RyanStewart@gmail.com</a>
                                                        </td>
                                                        <td>
                                                            13/01/21
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Working</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                    <div className="modal fade" id="addemp" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput877" className="form-label">Employee Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput877" placeholder="Explain what the Project Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput977" className="form-label">Employee Company</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput977" placeholder="Explain what the Project Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFileMultipleoneone" className="form-label">Employee Profile</label>
                                        <input className="form-control" type="file" id="formFileMultipleoneone" />
                                    </div>
                                    <div className="deadline-form">
                                        <form>
                                            <div className="row g-3 mb-3">
                                                <div className="col-sm-6">
                                                    <label htmlFor="exampleFormControlInput1778" className="form-label">Employee ID</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1778" placeholder="User Name" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="exampleFormControlInput2778" className="form-label">Joining Date</label>
                                                    <input type="date" className="form-control" id="exampleFormControlInput2778" />
                                                </div>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <div className="col">
                                                    <label htmlFor="exampleFormControlInput177" className="form-label">User Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="exampleFormControlInput277" className="form-label">Password</label>
                                                    <input type="Password" className="form-control" id="exampleFormControlInput277" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <div className="col">
                                                    <label htmlFor="exampleFormControlInput477" className="form-label">Email ID</label>
                                                    <input type="email" className="form-control" id="exampleFormControlInput477" placeholder="User Name" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="exampleFormControlInput777" className="form-label">Phone</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput777" placeholder="User Name" />
                                                </div>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <div className="col">
                                                    <label className="form-label">Department</label>
                                                    <select className="form-select" aria-label="Default select Project Category">
                                                        <option selected>Web Development</option>
                                                        <option value={1}>It Management</option>
                                                        <option value={2}>Marketing</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label">Designation</label>
                                                    <select className="form-select" aria-label="Default select Project Category">
                                                        <option selected>UI/UX Design</option>
                                                        <option value={1}>Website Design</option>
                                                        <option value={2}>App Development</option>
                                                        <option value={3}>Quality Assurance</option>
                                                        <option value={4}>Development</option>
                                                        <option value={5}>Backend Development</option>
                                                        <option value={6}>Software Testing</option>
                                                        <option value={7}>Website Design</option>
                                                        <option value={8}>Marketing</option>
                                                        <option value={9}>SEO</option>
                                                        <option value={10}>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea78" rows={3} placeholder="Add any extra details about the request" defaultValue={""} />
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Project Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                    <th className="text-center">Import</th>
                                                    <th className="text-center">Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-bold">Projects</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault2" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault3" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault4" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault5" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault6" defaultChecked />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Tasks</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault7" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault8" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault9" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault10" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault11" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault12" defaultChecked />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Chat</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault13" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault14" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault15" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault16" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault17" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault18" defaultChecked />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Estimates</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault19" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault20" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault21" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault22" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault23" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault24" defaultChecked />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Invoices</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault25" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault26" />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault27" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault28" />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault29" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault30" defaultChecked />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Timing Sheets</td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault31" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault32" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault33" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault34" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault35" defaultChecked />
                                                    </td>
                                                    <td className="text-center">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault36" defaultChecked />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                                    <button type="button" className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Employee;