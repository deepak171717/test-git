import React from 'react'
import { Link } from 'react-router-dom'

function HoursAccordionToday(props) {
    return (
        <div className="row pb-3 row-deck">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <Link data-bs-toggle="collapse" to={"#" + props.acc_collapse}  role="button" aria-expanded="false">
                            <div className="user-profile d-flex align-items-center">
                                <img className="avatar rounded-circle" src={props.accordion_img} alt="profile" />
                                <span className="fw-bold px-2">{props.accordion_name}</span>
                                <span className="h6 fw-bold ms-auto px-2">{props.accordion_time}</span>
                                <span><i className="icofont-rounded-down fs-4" /></span>
                            </div>
                            <div className="progress mt-2" style={{ height: '8px' }}>
                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={props.accordion_progressbar} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </Link>
                        <div className="collapse py-3 " id={props.acc_collapse}>
                            <div className="card card-body">
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accordion_time}</span>
                                        <span className="fw-bold ms-auto">{props.accordion_time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={props.accordion_content_progress} aria-valuemin={0} aria-valuemax={100} />
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

export default HoursAccordionToday