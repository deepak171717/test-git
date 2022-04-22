import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'

import chat_img1 from '../../images/xs/avatar1.svg'
import chat_img2 from '../../images/xs/avatar2.svg'
import chat_img3 from '../../images/xs/avatar3.svg'


import HAT from '../reports/HoursAccordionToday'
import HAW from '../reports/HoursAccordionWeek'
import HAM from '../reports/HoursAccordionMonth'

function HoursTracked() {
    return (
        <div id="timetracker-layout" className="theme-mist">
            <Sidebar />

            <div className="main px-lg-4 px-md-4">
                <Header />

                <div className="body d-flex py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
                                    <h3 className="h4 mb-0">Work Track</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3 mb-3 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <ul className="nav nav-tabs tab-body-header rounded">
                                    <li className="nav-item"><a className="nav-link  active" data-bs-toggle="tab" href="#summery-today">TODAY</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-week">WEEK</a></li>
                                    <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#summery-month">MONTH</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-7 col-md-12">
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
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="summery-today">

                                        <HAT acc_collapse="accordian1" accordion_img={chat_img1} accordion_name="John Quinn" accordion_time="6h 51m" accordion_progressbar="40" accordion_content_progress="40" />

                                        <HAT acc_collapse="accordian2" accordion_img={chat_img2} accordion_name="Natalie Gibson" accordion_time="7h 51m" accordion_progressbar="75" accordion_content_progress="75" />

                                        <HAT acc_collapse="accordian3" accordion_img={chat_img3} accordion_name="Robert Young" accordion_time="6h 10m" accordion_progressbar="60" accordion_content_progress="60" />

                                    </div>

                                    <div className="tab-pane fade show active" id="summery-week">

                                        <HAW acc_week="accordionweek1" acc_img={chat_img1} acc_name="John Quinn" acc_totalTime="29h 33m" progressTotal="60" thursdayDate="Thu, Aug 26" progress_thursday="40" wednesdayDate="Wed, Aug 25" progress_wednesday="90" tuesdayDate="Tues, Aug 24" progress_tuesday="80" mondayDate="Mon, Aug 23" progress_monday="85" />

                                        <HAW acc_week="accordionweek2" acc_img={chat_img2} acc_name="Natalie Gibson" acc_totalTime="27h 12m" progressTotal="30" thursdayDate="Thu, Aug 26" progress_thursday="40" wednesdayDate="Wed, Aug 25" progress_wednesday="90" tuesdayDate="Tues, Aug 24" progress_tuesday="80" mondayDate="Mon, Aug 23" progress_monday="85" />

                                        <HAW acc_week="accordionweek3" acc_img={chat_img3} acc_name="Robert Young" acc_totalTime="24h 12m" progressTotal="15" thursdayDate="Thu, Aug 26" progress_thursday="40" wednesdayDate="Wed, Aug 25" progress_wednesday="90" tuesdayDate="Tues, Aug 24" progress_tuesday="80" mondayDate="Mon, Aug 23" progress_monday="85" />

                                    </div>

                                    <div className="tab-pane fade" id="summery-month">

                                        <HAM accMonth="accordion_month1"
                                            accMonth_Img={chat_img1}
                                            accMonth_name="John Quinn"
                                            accMonth_totalTime="102h 68m"
                                            accMonth_totalProgress="65"
                                            accMonth_aug1="Thu, Aug 26" accMonth_aug1Time="6h 51m" accMonth_aug1Progress="30"
                                            accMonth_aug2="Wed, Aug 25" accMonth_aug2Time="7h 51m" accMonth_aug2Progress="30"
                                            accMonth_aug3="Tus, Aug 24" accMonth_aug3Time="8h 51m" accMonth_aug3Progress="85"
                                            accMonth_aug4="Mon, Aug 23" accMonth_aug4Time="7h 21m" accMonth_aug4Progress="75"
                                            accMonth_aug5="Sun, Aug 22" accMonth_aug5Time="8h 51m" accMonth_aug5Progress="80"
                                            accMonth_aug6="Sat, Aug 21" accMonth_aug6Time="0h 0m" accMonth_aug6Progress="0"
                                            accMonth_aug7="Fri, Aug 20" accMonth_aug7Time="0h 0m" accMonth_aug7Progress="0"
                                            accMonth_aug8="Thu, Aug 19" accMonth_aug8Time="6h 45m" accMonth_aug8Progress="60"
                                            accMonth_aug9="Wed, Aug 18" accMonth_aug9Time="8h 45m" accMonth_aug9Progress="65"
                                            accMonth_aug10="Tus, Aug 17" accMonth_aug10Time="7h 45m" accMonth_aug10Progress="75"
                                            accMonth_aug11="Mon, Aug 15" accMonth_aug11Time="7h 45m" accMonth_aug11Progress="0"
                                            accMonth_aug12="Sat, Aug 14" accMonth_aug12Time="7h 45m" accMonth_aug12Progress="75"
                                            accMonth_aug13="Fri, Aug 13" accMonth_aug13Time="8h 51m" accMonth_aug13Progress="80"
                                        />

                                        <HAM accMonth="accordion_month2"
                                            accMonth_Img={chat_img2}
                                            accMonth_name="Natalie Gibson"
                                            accMonth_totalTime="108h 68m"
                                            accMonth_totalProgress="95"
                                            accMonth_aug1="Thu, Aug 26" accMonth_aug1Time="6h 51m" accMonth_aug1Progress="30"
                                            accMonth_aug2="Wed, Aug 25" accMonth_aug2Time="7h 51m" accMonth_aug2Progress="30"
                                            accMonth_aug3="Tus, Aug 24" accMonth_aug3Time="8h 51m" accMonth_aug3Progress="85"
                                            accMonth_aug4="Mon, Aug 23" accMonth_aug4Time="7h 21m" accMonth_aug4Progress="75"
                                            accMonth_aug5="Sun, Aug 22" accMonth_aug5Time="8h 51m" accMonth_aug5Progress="80"
                                            accMonth_aug6="Sat, Aug 21" accMonth_aug6Time="0h 0m" accMonth_aug6Progress="0"
                                            accMonth_aug7="Fri, Aug 20" accMonth_aug7Time="0h 0m" accMonth_aug7Progress="0"
                                            accMonth_aug8="Thu, Aug 19" accMonth_aug8Time="6h 45m" accMonth_aug8Progress="60"
                                            accMonth_aug9="Wed, Aug 18" accMonth_aug9Time="8h 45m" accMonth_aug9Progress="65"
                                            accMonth_aug10="Tus, Aug 17" accMonth_aug10Time="7h 45m" accMonth_aug10Progress="75"
                                            accMonth_aug11="Mon, Aug 15" accMonth_aug11Time="7h 45m" accMonth_aug11Progress="0"
                                            accMonth_aug12="Sat, Aug 14" accMonth_aug12Time="7h 45m" accMonth_aug12Progress="75"
                                            accMonth_aug13="Fri, Aug 13" accMonth_aug13Time="8h 51m" accMonth_aug13Progress="80"
                                        />

                                        <HAM accMonth="accordion_month3"
                                            accMonth_Img={chat_img3}
                                            accMonth_name="Robert Young"
                                            accMonth_totalTime="104h 68m"
                                            accMonth_totalProgress="65"
                                            accMonth_aug1="Thu, Aug 26" accMonth_aug1Time="6h 51m" accMonth_aug1Progress="30"
                                            accMonth_aug2="Wed, Aug 25" accMonth_aug2Time="7h 51m" accMonth_aug2Progress="30"
                                            accMonth_aug3="Tus, Aug 24" accMonth_aug3Time="8h 51m" accMonth_aug3Progress="85"
                                            accMonth_aug4="Mon, Aug 23" accMonth_aug4Time="7h 21m" accMonth_aug4Progress="75"
                                            accMonth_aug5="Sun, Aug 22" accMonth_aug5Time="8h 51m" accMonth_aug5Progress="80"
                                            accMonth_aug6="Sat, Aug 21" accMonth_aug6Time="0h 0m" accMonth_aug6Progress="0"
                                            accMonth_aug7="Fri, Aug 20" accMonth_aug7Time="0h 0m" accMonth_aug7Progress="0"
                                            accMonth_aug8="Thu, Aug 19" accMonth_aug8Time="6h 45m" accMonth_aug8Progress="60"
                                            accMonth_aug9="Wed, Aug 18" accMonth_aug9Time="8h 45m" accMonth_aug9Progress="65"
                                            accMonth_aug10="Tus, Aug 17" accMonth_aug10Time="7h 45m" accMonth_aug10Progress="75"
                                            accMonth_aug11="Mon, Aug 15" accMonth_aug11Time="7h 45m" accMonth_aug11Progress="0"
                                            accMonth_aug12="Sat, Aug 14" accMonth_aug12Time="7h 45m" accMonth_aug12Progress="75"
                                            accMonth_aug13="Fri, Aug 13" accMonth_aug13Time="8h 51m" accMonth_aug13Progress="80"
                                        />
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

export default HoursTracked