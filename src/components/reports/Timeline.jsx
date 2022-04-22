import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
import { Link } from 'react-router-dom'


import img_logo1 from "../../images/avatar666.svg";
import RChart from './Reportapex';
import ApexChart from '../Apextimeline';

const Timeline = () => {
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
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
                                        <h3 className="h4 mb-0">Timeline</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 mb-3 align-items-center">
                                <div className="col-lg-3 col-md-12">
                                    <ul className="nav nav-tabs tab-body-header rounded">
                                        <li className="nav-item"><Link className="nav-link  active" data-bs-toggle="tab" to="#summery-today">TODAY</Link></li>
                                        <li className="nav-item"><Link className="nav-link " data-bs-toggle="tab" to="#summery-week">WEEK</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-9 col-md-12">
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
                                                <div className="col-xl-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <table id="timetracker-table" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                                <thead>
                                                                    <tr>
                                                                        <th className="w-50">User</th>
                                                                        <th>User Name</th>
                                                                        <th>Time Worked</th>
                                                                        <th>Track</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>US-0001<div id="apex-timeline-one" className="d-block" style={{ marginLeft: '-25px' }} />
                                                                            <RChart />
                                                                        </td>
                                                                        <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="" /><span>Natalie Gibson</span></td>
                                                                        <td>7h 10m</td>
                                                                        <td><Link to="#" data-bs-toggle="modal" data-bs-target="#trackingmodal-one" className="d-block py-2 text-secondary underline" onclick="return chartloadone()">Click to tracking</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>US-0002<div id="apex-timeline-two" className="d-block" style={{ marginLeft: '-25px' }} />
                                                                            <RChart />
                                                                        </td>
                                                                        <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="" /><span>Robert Young</span></td>
                                                                        <td>8h 10m</td>
                                                                        <td><Link to="#" data-bs-toggle="modal" data-bs-target="#trackingmodal-two" className="d-block py-2 text-secondary underline" onclick="return chartloadtwo()">Click to tracking</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>US-0003<div id="apex-timeline-three" className="d-block" style={{ marginLeft: '-25px' }} />
                                                                            <RChart />
                                                                        </td>
                                                                        <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="" /><span>John Quinn </span></td>
                                                                        <td>8h 10m</td>
                                                                        <td><Link to="#" data-bs-toggle="modal" data-bs-target="#trackingmodal-three" className="d-block py-2 text-secondary underline" onclick="return chartloadthree()">Click to tracking</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* row end */}
                                        </div>
                                        <div className="tab-pane fade" id="summery-week">
                                            <div className="row pb-3 row-deck">
                                                <div className="col-xl-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table id="timetracker-table-two" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>User</th>
                                                                            <th>User Name</th>
                                                                            <th>Time Worked</th>
                                                                            <th>Monady</th>
                                                                            <th>Tuesday</th>
                                                                            <th>Wednesday</th>
                                                                            <th>Thursday</th>
                                                                            <th>Friday</th>
                                                                            <th>Saturday</th>
                                                                            <th>Sunday</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>US-0001</td>
                                                                            <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Natalie Gibson </span></td>
                                                                            <td>55h 10m</td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '76%' }} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>US-0003</td>
                                                                            <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Robert Young</span></td>
                                                                            <td>58h 30m</td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '86%' }} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>US-0002</td>
                                                                            <td><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>John Quinn </span></td>
                                                                            <td>60h 20m</td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '96%' }} aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '76%' }} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* row end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog  modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Custom Settings</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body custom_setting">
                                    {/* Settings: Color */}
                                    <div className="setting-theme pb-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-color-bucket fs-4 me-2 text-primary" />Template Color Settings</h6>
                                        <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                                            <li data-theme="indigo"><div className="indigo" /></li>
                                            <li data-theme="tradewind"><div className="tradewind" /></li>
                                            <li data-theme="monalisa"><div className="monalisa" /></li>
                                            <li data-theme="mist" className="active"><div className="mist" /></li>
                                            <li data-theme="cyan"><div className="cyan" /></li>
                                            <li data-theme="green"><div className="green" /></li>
                                            <li data-theme="orange"><div className="orange" /></li>
                                            <li data-theme="blush"><div className="blush" /></li>
                                            <li data-theme="red"><div className="red" /></li>
                                        </ul>
                                    </div>
                                    {/* Settings: Template dynamics */}
                                    <div className="dynamic-block py-3">
                                        <ul className="list-unstyled choose-skin mb-2 mt-1">
                                            <li data-theme="dynamic"><div className="dynamic"><i className="icofont-paint me-2" /> Click to Dyanmic Setting</div></li>
                                        </ul>
                                        <div className="dt-setting">
                                            <ul className="list-group list-unstyled mt-1">
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label>Primary Color</label>
                                                    <button id="primaryColorPicker" className="btn bg-primary avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label>Secondary Color</label>
                                                    <button id="secondaryColorPicker" className="btn bg-secondary avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 1</label>
                                                    <button id="chartColorPicker1" className="btn chart-color1 avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 2</label>
                                                    <button id="chartColorPicker2" className="btn chart-color2 avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 3</label>
                                                    <button id="chartColorPicker3" className="btn chart-color3 avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 4</label>
                                                    <button id="chartColorPicker4" className="btn chart-color4 avatar xs border-0 rounded-0" />
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 5</label>
                                                    <button id="chartColorPicker5" className="btn chart-color5 avatar xs border-0 rounded-0" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Settings: Font */}
                                    <div className="setting-font py-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-font fs-4 me-2 text-primary" /> Font Settings</h6>
                                        <ul className="list-group font_setting mt-1">
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font" id="font-poppins" defaultValue="font-poppins" />
                                                    <label className="form-check-label" htmlFor="font-poppins">
                                                        Poppins Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font" id="font-opensans" defaultValue="font-opensans" />
                                                    <label className="form-check-label" htmlFor="font-opensans">
                                                        Open Sans Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font" id="font-montserrat" defaultValue="font-montserrat" />
                                                    <label className="form-check-label" htmlFor="font-montserrat">
                                                        Montserrat Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font" id="font-Plex" defaultValue="font-Plex" defaultChecked />
                                                    <label className="form-check-label" htmlFor="font-Plex">
                                                        Plex Google Font
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Settings: Light/dark */}
                                    <div className="setting-mode py-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-layout fs-4 me-2 text-primary" />Contrast Layout</h6>
                                        <ul className="list-group list-unstyled mb-0 mt-1">
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-switch mb-0">
                                                    <input className="form-check-input" type="checkbox" id="theme-switch" />
                                                    <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-high-contrast mb-0">
                                                    <input className="form-check-input" type="checkbox" id="theme-high-contrast" />
                                                    <label className="form-check-label" htmlFor="theme-high-contrast">Enable High Contrast</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-rtl mb-0">
                                                    <input className="form-check-input" type="checkbox" id="theme-rtl" />
                                                    <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-start">
                                    <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary lift">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* Modal timetrack*/}
                    <div className="modal fade" id="trackingmodal-one" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Natalie Gibson </span></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div id="apex-timeline-four" className="d-block w-100" style={{ marginLeft: '-25px' }} />
                                    <ApexChart/>
                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3 px-0">
                                        <h6 className="m-0 fw-bold">Overview</h6>
                                        <div className="timeinfo-block d-flex">
                                            <div className="start-time text-muted">
                                                <i className="icofont-ui-play" />
                                                <span>Start time: 9:07 AM</span>
                                            </div>
                                            <div className="end-time ms-3 text-muted">
                                                <i className="icofont-ui-play-stop" />
                                                <span>End time: 7:15 PM</span>
                                            </div>
                                            <div className="report ms-3">
                                                <i className="icofont-wall-clock" />
                                                <span>Worked: 9:00 m</span>
                                            </div>
                                        </div>
                                    </div>
                                    <table id="timetracker-table-five" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                                <th>Worked</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>9:07 AM</td>
                                                <td>9h 07m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>9:07 AM</td>
                                                <td>11:22 AM</td>
                                                <td>2h 15m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:22 AM</td>
                                                <td>11:24 AM</td>
                                                <td>2m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>11:24 AM</td>
                                                <td>11:31 AM</td>
                                                <td>6m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:31 AM</td>
                                                <td>11:46 AM</td>
                                                <td>15m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>12:02 PM</td>
                                                <td>12:06 PM</td>
                                                <td>4m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>1:23 PM</td>
                                                <td>1:48 PM</td>
                                                <td>4m</td>
                                                <td>Not working</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal timetrack*/}
                    <div className="modal fade" id="trackingmodal-two" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Robert Young </span></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div id="apex-timeline-five" className="d-block w-100" style={{ marginLeft: '-25px' }} />
                                    <ApexChart/>
                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3 px-0">
                                        <h6 className="m-0 fw-bold">Overview</h6>
                                        <div className="timeinfo-block d-flex">
                                            <div className="start-time text-muted">
                                                <i className="icofont-ui-play" />
                                                <span>Start time: 9:07 AM</span>
                                            </div>
                                            <div className="end-time ms-3 text-muted">
                                                <i className="icofont-ui-play-stop" />
                                                <span>End time: 7:15 PM</span>
                                            </div>
                                            <div className="report ms-3">
                                                <i className="icofont-wall-clock" />
                                                <span>Worked: 9:00 m</span>
                                            </div>
                                        </div>
                                    </div>
                                    <table id="timetracker-table-three" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                                <th>Worked</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>9:07 AM</td>
                                                <td>9h 07m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>9:07 AM</td>
                                                <td>11:22 AM</td>
                                                <td>2h 15m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:22 AM</td>
                                                <td>11:24 AM</td>
                                                <td>2m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>11:24 AM</td>
                                                <td>11:31 AM</td>
                                                <td>6m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:31 AM</td>
                                                <td>11:46 AM</td>
                                                <td>15m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>12:02 PM</td>
                                                <td>12:06 PM</td>
                                                <td>4m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>1:23 PM</td>
                                                <td>1:48 PM</td>
                                                <td>4m</td>
                                                <td>Not working</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal timetrack*/}
                    <div className="modal fade" id="trackingmodal-three" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"><img src={img_logo1} className="avatar sm rounded-circle me-2" alt="profile-image" /><span>John Quinn</span></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div id="apex-timeline-six" className="d-block w-100" style={{ marginLeft: '-25px' }} />
                                    <ApexChart/>
                                    <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3 px-0">
                                        <h6 className="m-0 fw-bold">Overview</h6>
                                        <div className="timeinfo-block d-flex">
                                            <div className="start-time text-muted">
                                                <i className="icofont-ui-play" />
                                                <span>Start time: 9:07 AM</span>
                                            </div>
                                            <div className="end-time ms-3 text-muted">
                                                <i className="icofont-ui-play-stop" />
                                                <span>End time: 7:15 PM</span>
                                            </div>
                                            <div className="report ms-3">
                                                <i className="icofont-wall-clock" />
                                                <span>Worked: 9:00 m</span>
                                            </div>
                                        </div>
                                    </div>
                                    <table id="timetracker-table-four" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                                <th>Worked</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>9:07 AM</td>
                                                <td>9h 07m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>9:07 AM</td>
                                                <td>11:22 AM</td>
                                                <td>2h 15m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:22 AM</td>
                                                <td>11:24 AM</td>
                                                <td>2m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>11:24 AM</td>
                                                <td>11:31 AM</td>
                                                <td>6m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>11:31 AM</td>
                                                <td>11:46 AM</td>
                                                <td>15m</td>
                                                <td>Not working</td>
                                            </tr>
                                            <tr>
                                                <td>12:02 PM</td>
                                                <td>12:06 PM</td>
                                                <td>4m</td>
                                                <td>On computer</td>
                                            </tr>
                                            <tr>
                                                <td>1:23 PM</td>
                                                <td>1:48 PM</td>
                                                <td>4m</td>
                                                <td>Not working</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
            






            </div>
        </div>


        </>
    )
}

export default Timeline;