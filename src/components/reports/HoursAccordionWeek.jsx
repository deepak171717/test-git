import React from 'react'
import { Link } from 'react-router-dom'

function HoursAccordionWeek(props) {
    return (
        <div className="row pb-3 row-deck">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <Link data-bs-toggle="collapse" to={"#" + props.acc_week} role="button" aria-expanded="false">
                            <div className="user-profile d-flex align-items-center">
                                <img className="avatar rounded-circle" src={props.acc_img} alt="profile" />
                                <span className="fw-bold px-2">{props.acc_name}</span>
                                <span className="h6 fw-bold ms-auto px-2">{props.acc_totalTime}</span>
                                <span><i className="icofont-rounded-down fs-4" /></span>
                            </div>
                            <div className="progress mt-2" style={{ height: '8px' }}>
                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow={props.progressTotal} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </Link>
                        <div className="collapse py-3" id={props.acc_week}>
                            <div className="card card-body">
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.thursdayDate}</span>
                                        <span className="fw-bold ms-auto">6h 51m</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={props.progress_thursday} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.wednesdayDate}</span>
                                        <span className="fw-bold ms-auto">8h 51m</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={props.progress_wednesday} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.tuesdayDate}</span>
                                        <span className="fw-bold ms-auto">7h 10m</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={props.progress_tuesday} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.mondayDate}</span>
                                        <span className="fw-bold ms-auto">7h 21m</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={props.progress_monday} aria-valuemin={0} aria-valuemax={100} />
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

export default HoursAccordionWeek