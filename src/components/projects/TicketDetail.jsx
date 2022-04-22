import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
import { Link } from 'react-router-dom'


const TicketDetail = () => {
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
                                        <h3 className="h4 mb-0">Tickets Detail</h3>
                                    </div>
                                </div>
                            </div> {/* Row end  */}
                            <div className="row g-3">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="mb-5 text-secondary">Tickets: Tc-00011</h3>
                                            <h4 className="mb-3">Punching time not proper</h4>
                                            <p className="fs-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                                                the word in classical literature, discovered the undoubtable source.</p>
                                            <p className="fs-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                                                generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                                                Internet.</p>
                                            <h5 className="mt-4 mb-3">Issue point</h5>
                                            <ul className="list-unstyled list-style lh-lg">
                                                <li><i className="fa fa-angle-double-right me-3" />It is a long established fact that a reader will be distracted</li>
                                                <li><i className="fa fa-angle-double-right me-3" />Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</li>
                                                <li><i className="fa fa-angle-double-right me-3" />There are many variations of passages of Lorem Ipsum available</li>
                                                <li><i className="fa fa-angle-double-right me-3" />The generated Lorem Ipsum is therefore always free from repetition</li>
                                                <li><i className="fa fa-angle-double-right me-3" />Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</li>
                                                <li><i className="fa fa-angle-double-right me-3" />It has survived not only five centuries, but also the leap into electronic</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Created:
                                            <span className>29 May, 2020</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Created by:
                                            <span className><Link to="#">Birju Cuda</Link></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Priority:
                                            <span className="badge bg-danger">Highest <i className="fa fa-caret-down" /></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Status:
                                            <span className>Working</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>

        </>
    )
}

export default TicketDetail