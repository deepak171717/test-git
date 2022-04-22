import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './common/Sidebar'
import Header from './common/Header'
import Screenshots from './Screenshots'
import ss_link_pic from '../images/gallery/1.jpg'
import Screenshot_image from '../images/profile_av.svg'
import IndexTopUsed from './Index_topUsed'
import TaskAndProject from './Index_taskAndProj'
import ApexChart from './Apextimeline'
import Areachart from './Areachart'
import Archart from './Areachart2'
import Areachart3 from './Areachart3'


function Index() {
    return (
        <div id="timetracker-layout" className='theme-mist'>

            {/* =============== SIDEBAR ======================= */}
            <Sidebar />

            <div className='main px-lg-4 px-md-4'>

                {/* =============== HEADER ======================= */}
                <Header />
                {/* =============== MAIN BODY ======================= */}
                <div className="body d-flex py-3">
                    <div className="container-xxl">
                        <div className="row g-3 mb-3 align-items-center">
                            <div className="col-xl-7 col-lg-12 col-md-12">
                                {/* =============== Tabbing Section ======================= */}
                                <ul className="nav nav-tabs tab-body-header rounded">
                                    <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#summery-today">TODAY</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-yesterday" onclick="return chartFunctiontwo()">YESTERDAY</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-week" onclick="return chartFunctionthree()">PAST 7 DAYS</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-month" onclick="return chartFunctionfour()">PAST 30 DAYS</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-12 col-md-12">
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
                            <div className="col-md-12">
                                <div className="tab-content mt-1">
                                    <div className="tab-pane fade show active" id="summery-today">
                                        <div className="row g-3 mb-3 row-deck">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Total time tracked</span>
                                                        <div><span className="fs-6 fw-bold me-2">8h 51m</span></div>
                                                        <small className="text-muted d-block">This week: 9h 34m</small>
                                                        <small className="text-muted d-block">This month: 97h 52m</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3 position-relative">
                                                        <span className="text-muted">Idle minutes </span>
                                                        <div><span className="fs-6 fw-bold me-2">8M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Unproductive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">16M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Productive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">7H</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Manual time</span>
                                                        <div><span className="fs-6 fw-bold me-2">5M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Mobile time</span>
                                                        <div><span className="fs-6 fw-bold me-2">0M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-header d-flex  align-items-center bg-transparent border-bottom-0 flex-wrap py-3">
                                                        <h6 className="m-0 fw-bold">Timeline</h6>
                                                        <div className="timeinfo-block d-flex flex-wrap ms-auto">
                                                            <div className="report ms-3">
                                                                <a href="timeline.html" className="text-secondary underline">Timeline Report</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ApexChart/>

                                                    <div className="card-body">
                                                        <div id="apex-timeline" style={{ marginLeft: '-25px' }} />
                                                        <div className="timeinfo-block d-flex flex-wrap justify-content-end">
                                                            <div className="start-time text-muted">
                                                                <i className="icofont-ui-play" />
                                                                <span>Start time: 9:55 AM</span>
                                                            </div>
                                                            <div className="end-time ms-3 text-muted">
                                                                <i className="icofont-ui-play-stop" />
                                                                <span>End time: 12:03 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* row end */}
                                    </div>







                                    <div className="tab-pane fade" id="summery-yesterday">
                                        <div className="row g-3 mb-3 row-deck">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Total time tracked</span>
                                                        <div><span className="fs-6 fw-bold me-2">9h 03m</span></div>
                                                        <small className="text-muted d-block">This week: 9h 03m</small>
                                                        <small className="text-muted d-block">This month: 97h 52m</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3 position-relative">
                                                        <span className="text-muted">Idle minutes </span>
                                                        <div><span className="fs-6 fw-bold me-2">25M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Unproductive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">36M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Productive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">7H 30M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Manual time</span>
                                                        <div><span className="fs-6 fw-bold me-2">5M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Mobile time</span>
                                                        <div><span className="fs-6 fw-bold me-2">0M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
                                                        <h6 className="m-0 fw-bold">Hours tracked</h6>
                                                    </div>

                                                    <Areachart/>

                                                    <div className="card-body py-xl-4 py-3">
                                                        <div id="apex-stacked-area-yes" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* row end */}
                                    </div>
                                    <div className="tab-pane fade" id="summery-week">
                                        <div className="row g-3 mb-3 row-deck">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Total time tracked</span>
                                                        <div><span className="fs-6 fw-bold me-2">28h 27m</span></div>
                                                        <small className="text-muted d-block">This week: 29h 34m</small>
                                                        <small className="text-muted d-block">This month: 167h 52m</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3 position-relative">
                                                        <span className="text-muted">Idle minutes </span>
                                                        <div><span className="fs-6 fw-bold me-2">68M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Unproductive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">66M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Productive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">28H</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Manual time</span>
                                                        <div><span className="fs-6 fw-bold me-2">15M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Mobile time</span>
                                                        <div><span className="fs-6 fw-bold me-2">0M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
                                                        <h6 className="m-0 fw-bold">Hours tracked</h6>
                                                    </div>

                                                    <Archart/>

                                                    <div className="card-body py-xl-4 py-3">
                                                        <div id="apex-stacked-area" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* row end */}
                                    </div>
                                    <div className="tab-pane fade" id="summery-month">
                                        <div className="row g-3 mb-3 row-deck">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Total time tracked</span>
                                                        <div><span className="fs-6 fw-bold me-2">8h 51m</span></div>
                                                        <small className="text-muted d-block">This week: 9h 34m</small>
                                                        <small className="text-muted d-block">This month: 97h 52m</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3 position-relative">
                                                        <span className="text-muted">Idle minutes </span>
                                                        <div><span className="fs-6 fw-bold me-2">8M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Unproductive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">16M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Productive time</span>
                                                        <div><span className="fs-6 fw-bold me-2">7H</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Manual time</span>
                                                        <div><span className="fs-6 fw-bold me-2">5M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body py-xl-4 py-3">
                                                        <span className="text-muted">Mobile time</span>
                                                        <div><span className="fs-6 fw-bold me-2">0M</span></div>
                                                        <div className="progress mt-4" style={{ height: '8px' }}>
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
                                                        <h6 className="m-0 fw-bold">Hours tracked</h6>
                                                    </div>

                                                    <Areachart3/>

                                                    <div className="card-body py-xl-4 py-3">
                                                        <div id="apex-stacked-area-month" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* row end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*=================== SCREENCAST SECTION =====================  */}
                        <div className="row g-3 mb-3">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
                                        <h6 className="m-0 fw-bold">Recent Screencasts</h6>
                                        <div className="report ms-3">
                                            <Link to="#" className="text-secondary underline">All Screencasts</Link>
                                        </div>
                                    </div>

                                    <div className="card-body" id="aniimated-thumbnials">
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-6 g-3">
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="10:00 AM" progress1_Value="25" progress2_Value="45" />
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="10:30 AM" progress1_Value="25" progress2_Value="45" />
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="11:00 AM" progress1_Value="25" progress2_Value="45" />
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="11:30 AM" progress1_Value="25" progress2_Value="45" />
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="12:00 PM" progress1_Value="25" progress2_Value="45" />
                                            <Screenshots imgLink={ss_link_pic} img={Screenshot_image} ss_name="Nitin" ss_time="12:30 PM" progress1_Value="25" progress2_Value="45" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== TOP USED WEB & APP =============== */}

                        <IndexTopUsed />    

                        {/* ==================== TOP Task & Projects =============== */}

                        <TaskAndProject />

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Index