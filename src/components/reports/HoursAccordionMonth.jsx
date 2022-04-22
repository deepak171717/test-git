import React from 'react'
import { Link } from 'react-router-dom'

function HoursAccordionMonth(props) {
    return (
        <div className="row pb-3 row-deck">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <Link data-bs-toggle="collapse" to={"#" + props.accMonth} role="button" aria-expanded="false">
                            <div className="user-profile d-flex align-items-center">
                                <img className="avatar rounded-circle" src={props.accMonth_Img} alt="profile" />
                                <span className="fw-bold px-2">{props.accMonth_name}</span>
                                <span className="h6 fw-bold ms-auto px-2">{props.accMonth_totalTime}</span>
                                <span><i className="icofont-rounded-down fs-4" /></span>
                            </div>
                            <div className="progress mt-2" style={{ height: '8px' }}>
                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow={props.accMonth_totalProgress} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </Link>
                        <div className="collapse py-3" id={props.accMonth}>
                            <div className="card card-body">
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug1}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug1Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={props.accMonth_aug1Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug2}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug2Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={props.accMonth_aug2Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug3}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug3Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={props.accMonth_aug3Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug4}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug4Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={props.accMonth_aug4Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug5}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug5Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={props.accMonth_aug5Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug6}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug6Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={props.accMonth_aug6Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug7}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug7Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={props.accMonth_aug7Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug8}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug8Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow={props.accMonth_aug8Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug9}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug9Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow={props.accMonth_aug9Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug10}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug10Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow={props.accMonth_aug10Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug11}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug11Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow={props.accMonth_aug11Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug12}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug12Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={props.accMonth_aug12Progress} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-6 d-flex">
                                        <span>{props.accMonth_aug13}</span>
                                        <span className="fw-bold ms-auto">{props.accMonth_aug13Time}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress mt-2" style={{ height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow={props.accMonth_aug13Progress} aria-valuemin={0} aria-valuemax={100} />
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

export default HoursAccordionMonth