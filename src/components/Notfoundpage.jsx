import React from 'react'
import { Link } from 'react-router-dom';
import notfound_img from '../images/not_found.svg'

function Notfoundpage() {
    return (
        <div id="timetracker-layout" className="theme-mist">
            <div className="main p-2 py-3 p-xl-5">
                {/* Body: Header */}
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col">
                            <Link to="/" className="d-flex align-item-center">
                                <i className="icofont-stopwatch fs-3" />
                                <h5 className="mb-0 mt-1 mx-2">Timetracker</h5>
                            </Link >
                        </div>
                    </div>
                </div>
                <div className="body d-flex p-0 p-md-2 p-xl-5">
                    <div className="container-xxl">
                        <div className="row g-0 align-items-center border border-secondary rounded-3 mt-2 mt-md-0">
                            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center auth-h100 bg-secondary py-2 py-md-0">
                                <img src={notfound_img} className="img-fluid" alt="#" />
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 flex-column">
                                <div className="card" style={{ maxWidth: '30rem' }}>
                                    <div className="card-body p-4">
                                        <h1 className="display-1">Oh No! Error 404</h1>
                                        <span className="text-muted">Maybe Bigfoot has broken this page.Come back to the homepage</span>
                                        <Link to="/" title="#" className="btn btn-primary text-uppercase py-2 fs-5 mt-3 d-block">Back to Home</Link >
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

export default Notfoundpage