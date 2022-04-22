import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'

const Timesheet = () => {
    return (
        <>

            <div id="timetracker-layout" className="theme-mist">
                <Sidebar />

                <div className="main px-lg-4 px-md-4">
                    <Header />


                    <div className="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="h4 mb-0">Project Timesheet</h3>
                                        <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                                            <button type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#sendsheet"><i className="icofont-plus-circle me-2 fs-6" />Sent CSV</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <table id="timetracker-table" className="table table-hover custom-table align-middle mb-0" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Project</th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                        <th>Worked</th>
                                                        <th>Task Detail</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select Project Category">
                                                                <option selected>Rhinestone</option>
                                                                <option value={1}>Fast Cad</option>
                                                                <option value={2}>Box of Crayons</option>
                                                                <option value={3}>Gob Geeklords</option>
                                                                <option value={4}>Java Dalia</option>
                                                                <option value={5}>Practice to Perfect</option>
                                                                <option value={6}>Rhinestone</option>
                                                                <option value={7}>Social Geek Made</option>
                                                            </select>
                                                        </td>
                                                        <td><input type="time" className="form-control" id="timepickerded1" defaultValue="09:07:00" /></td>
                                                        <td><input type="time" className="form-control" id="timepickerded2" defaultValue="19:00:00" /></td>
                                                        <td><strong>9h 07m</strong></td>
                                                        <td><input type="text" className="form-control" defaultValue="Working On Design" /></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-save text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-close-line-squared-alt text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select Project Category">
                                                                <option selected>Box of Crayons</option>
                                                                <option value={1}>Fast Cad</option>
                                                                <option value={2}>Box of Crayons</option>
                                                                <option value={3}>Gob Geeklords</option>
                                                                <option value={4}>Java Dalia</option>
                                                                <option value={5}>Practice to Perfect</option>
                                                                <option value={6}>Rhinestone</option>
                                                                <option value={7}>Social Geek Made</option>
                                                            </select>
                                                        </td>
                                                        <td><input type="time" className="form-control" id="timepickerded3" defaultValue="08:45:00" /></td>
                                                        <td><input type="time" className="form-control" id="timepickerded4" defaultValue="18:07:00" /></td>
                                                        <td><strong>8h 52m</strong></td>
                                                        <td><input type="text" className="form-control" defaultValue="Form Validation" /></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-save text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-close-line-squared-alt text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select Project Category">
                                                                <option selected>Gob Geeklords</option>
                                                                <option value={1}>Fast Cad</option>
                                                                <option value={2}>Box of Crayons</option>
                                                                <option value={3}>Gob Geeklords</option>
                                                                <option value={4}>Java Dalia</option>
                                                                <option value={5}>Practice to Perfect</option>
                                                                <option value={6}>Rhinestone</option>
                                                                <option value={7}>Social Geek Made</option>
                                                            </select>
                                                        </td>
                                                        <td><input type="time" className="form-control" id="timepickerded5" defaultValue="08:40:00" /></td>
                                                        <td><input type="time" className="form-control" id="timepickerded6" defaultValue="19:08:00" /></td>
                                                        <td><strong>9h 53m</strong></td>
                                                        <td><input type="text" className="form-control" defaultValue="Marketing Image Design" /></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-save text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-close-line-squared-alt text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select Project Category">
                                                                <option selected>Java Dalia</option>
                                                                <option value={1}>Fast Cad</option>
                                                                <option value={2}>Box of Crayons</option>
                                                                <option value={3}>Gob Geeklords</option>
                                                                <option value={4}>Java Dalia</option>
                                                                <option value={5}>Practice to Perfect</option>
                                                                <option value={6}>Rhinestone</option>
                                                                <option value={7}>Social Geek Made</option>
                                                            </select>
                                                        </td>
                                                        <td><input type="time" className="form-control" id="timepickerded7" defaultValue="09:20:00" /></td>
                                                        <td><input type="time" className="form-control" id="timepickerded8" defaultValue="17:08:00" /></td>
                                                        <td><strong>6h 28m</strong></td>
                                                        <td><input type="text" className="form-control" defaultValue="Api Developing" /></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-save text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-close-line-squared-alt text-danger" /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select Project Category">
                                                                <option selected>Practice to Perfect</option>
                                                                <option value={1}>Fast Cad</option>
                                                                <option value={2}>Box of Crayons</option>
                                                                <option value={3}>Gob Geeklords</option>
                                                                <option value={4}>Java Dalia</option>
                                                                <option value={5}>Practice to Perfect</option>
                                                                <option value={6}>Rhinestone</option>
                                                                <option value={7}>Social Geek Made</option>
                                                            </select>
                                                        </td>
                                                        <td><input type="time" className="form-control" id="timepickerded9" defaultValue="08:20:00" /></td>
                                                        <td><input type="time" className="form-control" id="timepickerded10" defaultValue="19:08:00" /></td>
                                                        <td><strong>8h 28m</strong></td>
                                                        <td><input type="text" className="form-control" defaultValue="Bug Fixed" /></td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <button type="button" className="btn btn-outline-secondary"><i className="icofont-save text-success" /></button>
                                                                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-close-line-squared-alt text-danger" /></button>
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


                    <div className="modal fade" id="sendsheet" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title  fw-bold" id="sendsheetLabel"> Sheets Sent</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                                    <button type="submit" className="btn btn-primary">sent</button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}

export default Timesheet;