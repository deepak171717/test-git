import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
import { Link } from 'react-router-dom'

const Attedance = () => {
    return (
        <>
            <div id="timetracker-layout" className="theme-mist">
                <Sidebar />

                <div className="main px-lg-4 px-md-4">
                    <Header />

                    <div className="body d-flex py-lg-3 py-md-2">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="h4 mb-0">Attendance</h3>
                                        <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                                            <button type="button" className="btn btn-dark  w-sm-100 me-2" data-bs-toggle="modal" data-bs-target="#editattendance"><i className="icofont-edit me-2 fs-6" />Edit Attendance</button>
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                Filter
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                                <li><Link className="dropdown-item" to="#">All</Link></li>
                                                <li><Link className="dropdown-item" to="#">Today Absent</Link></li>
                                                <li><Link className="dropdown-item" to="#">Week Absent</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* Row end  */}
                            <div className="row clearfix g-3">
                                <div className="col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="atted-info d-flex mb-3 flex-wrap">
                                                <div className="full-present me-2">
                                                    <i className="icofont-check-circled text-success me-1" />
                                                    <span>Full Day Present</span>
                                                </div>
                                                <div className="Half-day me-2">
                                                    <i className="icofont-wall-clock text-warning me-1" />
                                                    <span>Half Day Present</span>
                                                </div>
                                                <div className="absent me-2">
                                                    <i className="icofont-close-circled text-danger me-1" />
                                                    <span>Full Day Absence</span>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ paddingRight: '55px' }}>Employee</th>
                                                            <th>1</th>
                                                            <th>2</th>
                                                            <th>3</th>
                                                            <th>4</th>
                                                            <th>5</th>
                                                            <th>6</th>
                                                            <th>7</th>
                                                            <th>8</th>
                                                            <th>9</th>
                                                            <th>10</th>
                                                            <th>11</th>
                                                            <th>12</th>
                                                            <th>13</th>
                                                            <th>14</th>
                                                            <th>15</th>
                                                            <th>16</th>
                                                            <th>17</th>
                                                            <th>18</th>
                                                            <th>19</th>
                                                            <th>20</th>
                                                            <th>21</th>
                                                            <th>22</th>
                                                            <th>23</th>
                                                            <th>24</th>
                                                            <th>25</th>
                                                            <th>27</th>
                                                            <th>28</th>
                                                            <th>29</th>
                                                            <th>30</th>
                                                            <th>31</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Joan Dyer</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Ryan	Randall</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-close-circled text-danger" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-close-circled text-danger" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-close-circled text-danger" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Phil	Glover</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Victor Rampling</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Sally Graham</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Robert Anderson</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold small">Ryan	Stewart</span>
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-check-circled text-success" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                            <td>
                                                                <i className="icofont-wall-clock text-warning" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* Row End */}
                        </div>
                    </div>



                    <div className="modal fade" id="editattendance" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title  fw-bold" id="editattendanceLabel"> Edit Attendance</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Select Person</label>
                                        <select className="form-select">
                                            <option selected>Joan Dyer</option>
                                            <option value={1}>Ryan Randall</option>
                                            <option value={2}>Phil Glover</option>
                                            <option value={3}>Victor Rampling</option>
                                            <option value={4}>Sally Graham</option>
                                            <option value={5}>Robert Anderson</option>
                                            <option value={6}>Ryan Stewart</option>
                                        </select>
                                    </div>
                                    <div className="deadline-form">
                                        <form>
                                            <div className="row g-3 mb-3">
                                                <div className="col-sm-12">
                                                    <label htmlFor="datepickerdedass" className="form-label">Select Date</label>
                                                    <input type="date" className="form-control" id="datepickerdedass" />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label className="form-label">Attendance Type</label>
                                                    <select className="form-select">
                                                        <option selected>Full Day Present</option>
                                                        <option value={1}>Half Day Present</option>
                                                        <option value={2}>Full Day Absence</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea78d" className="form-label">Edit Reason</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea78d" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Attedance;