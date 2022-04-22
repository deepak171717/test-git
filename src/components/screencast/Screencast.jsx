import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
import ModScreencast from './Screencast_mod'



const Screencast = () => {
    return (
        <div id="timetracker-layout" className='theme-mist'>
            {/* =============== SIDEBAR ======================= */}
            <Sidebar />

            <div className='main px-lg-4 px-md-4'>
                <Header />
                <div className="body d-flex py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
                                    <h3 className="h4 mb-0">Screencasts</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-3 align-items-center">
                            <div className="col-xl-5 col-lg-12 col-md-12">
                                <ul className="nav nav-tabs tab-body-header rounded">
                                    <li className="nav-item"><a className="nav-link  active" data-bs-toggle="tab" href="#summery-today">TODAY</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-week">WEEK</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-month">MONTH</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-7 col-lg-12 col-md-12">
                                <div className="row g-2">
                                    <div className="col-12 col-md-6">
                                        <div className="input-group-lg">
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="input-group-lg">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select User</option>
                                                <option value={1}>Grace</option>
                                                <option value={2}>Gabrielle</option>
                                                <option value={3}>Molly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-lg-12 col-md-12">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="summery-today">
                                        <div className="row pb-3 row-deck">
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="12PM" box_date="Aug 26, 2021" />
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="summery-week">
                                        <div class="row pb-3 row-deck">
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="12PM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="12PM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="summery-month">
                                        <div class="row pb-3 row-deck">
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="12PM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="12PM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="9AM" box_date="Aug 26, 2021" />
                                            <ModScreencast box_time="10AM" box_date="Aug 26, 2021" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screencast