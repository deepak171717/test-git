import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
// import FullCalendar1 from './Caldate'

const Calandar = () => {
    return (
        <>
            <div id="timetracker-layout" className='theme-mist'>
                <Sidebar />

                <div className='main px-lg-4 px-md-4'>
                    <Header />


                    <div className="body d-flex py-lg-3 py-md-2">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
                                        <h3 className="h4 mb-0">Calendar</h3>
                                        <div className="col-auto d-flex">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addevent"><i className="icofont-plus-circle me-2 fs-6" />Add Event</button>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* Row end  */}
                            <div className="row clearfix g-3">
                                <div className="col-lg-12 col-md-12 ">
                                    {/* card: Calendar */}
                                    <div className="card">
                                        <div className="card-body" id="my_calendar" />
                                    </div>
                                    {/* <FullCalendar1/> */}



                                </div>
                            </div>{/* Row End */}
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Calandar;