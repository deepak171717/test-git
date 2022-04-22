import React from 'react'
import { Link } from 'react-router-dom'
import galleryImg from '../../images/gallery/1.jpg'
import Avtar from '../../images/profile_av.svg';

function Screencast_mod(props) {
    return (
        <div className="col-xl-12 mt-3">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
                    <div className="selectall-block">
                        <input className="form-check-input" type="checkbox" defaultValue />
                        <label className="form-check-label">Select All </label>
                    </div>
                    <div className="report ms-3">
                        <input className="form-check-input" type="checkbox" defaultValue />
                        <label className="form-check-label">Low activity screencasts</label>
                    </div>
                </div>
                <div className="card-body" id="aniimated-thumbnials">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="timezon-block py-3">
                                <h4 className="fw-bold mb-0 color-600">{props.box_time}</h4>
                                <span className="text-muted">{props.box_date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6">
                        <div className="col">
                            <div className="screen-card  p-2 border">
                                <Link to={ galleryImg }>
                                    <img className="img-fluid img-thumbnail" src={ galleryImg } alt="" />
                                </Link>
                                <div className="user-profile d-flex align-items-center mt-3">
                                    <img className="avatar rounded-circle" src={Avtar} alt="profile" />
                                    <div className="u-info ms-2">
                                        <span className="fw-bold d-block">John Quinn</span>
                                        <span className="text-muted">10:02 AM</span>
                                    </div>
                                </div>
                                <div className="user-activity d-flex justify-content-between">
                                    <div className="keybord-block w-50 pe-1">
                                        <i className="icofont-ui-keyboard " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="mouse-block w-50 ps-1 text-end">
                                        <i className="icofont-wireless-mouse " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="screen-card  p-2 border">
                                <Link to={ galleryImg }>
                                    <img className="img-fluid img-thumbnail" src={ galleryImg } alt="" />
                                </Link>
                                <div className="user-profile d-flex align-items-center mt-3">
                                    <img className="avatar rounded-circle" src={Avtar} alt="profile" />
                                    <div className="u-info ms-2">
                                        <span className="fw-bold d-block">John Quinn</span>
                                        <span className="text-muted">10:02 AM</span>
                                    </div>
                                </div>
                                <div className="user-activity d-flex justify-content-between">
                                    <div className="keybord-block w-50 pe-1">
                                        <i className="icofont-ui-keyboard " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="mouse-block w-50 ps-1 text-end">
                                        <i className="icofont-wireless-mouse " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="screen-card  p-2 border">
                                <Link to="assets/">
                                    <img className="img-fluid img-thumbnail" src={ galleryImg } alt="" />
                                </Link>
                                <div className="user-profile d-flex align-items-center mt-3">
                                    <img className="avatar rounded-circle" src={Avtar} alt="profile" />
                                    <div className="u-info ms-2">
                                        <span className="fw-bold d-block">John Quinn</span>
                                        <span className="text-muted">10:02 AM</span>
                                    </div>
                                </div>
                                <div className="user-activity d-flex justify-content-between">
                                    <div className="keybord-block w-50 pe-1">
                                        <i className="icofont-ui-keyboard " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="mouse-block w-50 ps-1 text-end">
                                        <i className="icofont-wireless-mouse " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="screen-card  p-2 border">
                                <Link to={ galleryImg }>
                                    <img className="img-fluid img-thumbnail" src={ galleryImg } alt="" />
                                </Link>
                                <div className="user-profile d-flex align-items-center mt-3">
                                    <img className="avatar rounded-circle" src={Avtar} alt="profile" />
                                    <div className="u-info ms-2">
                                        <span className="fw-bold d-block">John Quinn</span>
                                        <span className="text-muted">10:02 AM</span>
                                    </div>
                                </div>
                                <div className="user-activity d-flex justify-content-between">
                                    <div className="keybord-block w-50 pe-1">
                                        <i className="icofont-ui-keyboard " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="mouse-block w-50 ps-1 text-end">
                                        <i className="icofont-wireless-mouse " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="screen-card  p-2 border">
                                <Link to={ galleryImg }>
                                    <img className="img-fluid img-thumbnail" src={ galleryImg } alt="" />
                                </Link>
                                <div className="user-profile d-flex align-items-center mt-3">
                                    <img className="avatar rounded-circle" src={Avtar} alt="profile" />
                                    <div className="u-info ms-2">
                                        <span className="fw-bold d-block">John Quinn</span>
                                        <span className="text-muted">10:02 AM</span>
                                    </div>
                                </div>
                                <div className="user-activity d-flex justify-content-between">
                                    <div className="keybord-block w-50 pe-1">
                                        <i className="icofont-ui-keyboard " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="mouse-block w-50 ps-1 text-end">
                                        <i className="icofont-wireless-mouse " />
                                        <div className="progress" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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

export default Screencast_mod