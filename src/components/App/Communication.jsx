import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
import ChatProp from '../App/Chat_props'
import OfficeProp from '../App/Office_props'
import ContactProp from './Contact_props'
import ChattingLeft from './ChattingLeft.jsx'
import ChatRight from './ChattingRight'
import chat_img1 from '../../images/xs/avatar1.svg'
import chat_img2 from '../../images/xs/avatar2.svg'
import chat_img3 from '../../images/xs/avatar3.svg'
import chat_img4 from '../../images/xs/avatar4.svg'
import chat_img5 from '../../images/xs/avatar5.svg'
import chat_img6 from '../../images/xs/avatar6.svg'




function Communication() {
    return (
        <div id="timetracker-layout" className="theme-mist">
            <Sidebar />
            <div className="main">
                {/* Body: Body */}
                <div className="body d-flex">
                    <div className="container-xxl p-0">
                        <div className="row g-0">
                            <div className="col-12 d-flex">
                                {/* Card: */}
                                <div className="card card-chat border-right border-top-0 border-bottom-0  w380">
                                    <div className="px-4 py-3 py-md-4">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control mb-1" placeholder="Search..." />
                                        </div>
                                        <div className="nav nav-pills justify-content-between text-center" role="tablist">
                                            <Link className="flex-fill rounded border-0 nav-link active" data-bs-toggle="tab" to="#chat-recent" role="tab" aria-selected="true">Chat</Link>
                                            <Link className="flex-fill rounded border-0 nav-link" data-bs-toggle="tab" to="#chat-groups" role="tab" aria-selected="false">Office Groups</Link>
                                            <Link className="flex-fill rounded border-0 nav-link" data-bs-toggle="tab" to="#chat-contact" role="tab" aria-selected="false">Contact</Link>
                                        </div>
                                    </div>
                                    <div className="tab-content border-top">
                                        <div className="tab-pane fade show active" id="chat-recent" role="tabpanel">
                                            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                                <ChatProp chats_image={chat_img1} chats_name="Vanessa Knox" chats_time="10:45 AM" chats_textMsg="There are many variations of passages" />

                                                <ChatProp chats_image={chat_img2} chats_name="Abigail Bell" chats_time="11:45 AM" chats_textMsg="changed an issue from 'In Progress' to" />

                                                <ChatProp chats_image={chat_img6} chats_name="Diane Blake" chats_time="12:45 AM" chats_textMsg="It is a long established fact that a reader will be distracted" />

                                                <ChatProp chats_image={chat_img3} chats_name="Megan Dyer" chats_time="12:46 AM" chats_textMsg="Contrary to popular belief" />

                                                <ChatProp chats_image={chat_img4} chats_name="Abigail Bell" chats_time="12:47 AM" chats_textMsg="changed an issue from 'In Progress' to" />

                                                <ChatProp chats_image={chat_img5} chats_name="Donna Grant" chats_time="12:48 AM" chats_textMsg="Add Calander Event" />

                                                <ChatProp chats_image={chat_img6} chats_name="Vanessa Knox" chats_time="Thu" chats_textMsg="It is a long established fact that a reader will be distracted" />

                                                <ChatProp chats_image={chat_img3} chats_name="Diane Blake" chats_time="Wed" chats_textMsg="It is a long established fact that a reader will be distracted" />

                                                <ChatProp chats_image={chat_img5} chats_name="Megan Dyer" chats_time="13/02/2021" chats_textMsg="Contrary to popular belief" />

                                                <ChatProp chats_image={chat_img1} chats_name="Abigail Bell" chats_time="18/02/2021" chats_textMsg="Add Calander Event" />

                                                <ChatProp chats_image={chat_img2} chats_name="Vanessa Knox" chats_time="13/02/2020" chats_textMsg="Contrary to popular belief" />

                                                <ChatProp chats_image={chat_img3} chats_name="Diane Blake" chats_time="18/12/2021" chats_textMsg="There are many variations of passages" />
                                            </ul>
                                        </div>


                                        <div className="tab-pane fade" id="chat-groups" role="tabpanel">
                                            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                                <OfficeProp office_thumbnailImg="IN" office_title="Art Project" office_date="15/06/2021" office_msg="The point of using Lorem Ipsum" />

                                                <OfficeProp office_thumbnailImg="OD" office_title="Design Dribble" office_date="13/06/2021" office_msg="If you are going to use a passage" />

                                                <OfficeProp office_thumbnailImg="PD" office_title="Tester Group" office_date="12/06/2021" office_msg="The point of using Lorem Ipsum" />
                                            </ul>
                                        </div>

                                        <div className="tab-pane fade" id="chat-contact" role="tabpanel">
                                            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                                <ContactProp contact_img={chat_img1} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img1} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img2} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img3} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img4} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img5} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />

                                                <ContactProp contact_img={chat_img6} contact_name="Hannah Gill" contact_email="hannahgill@timetracker.com" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* =========================== CHAT SECTION ====================== */}

                                <div className="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">
                                    <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
                                        <div className="d-flex align-items-center">
                                            <Link to="/" title="Home" className="d-block d-xxl-none"><i className="icofont-arrow-left fs-4" /></Link>
                                            <Link to="#" title>
                                                <img className="avatar rounded" src={chat_img2} alt="avatar" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-0">Nirav Patel</h6>
                                                <small className="text-muted">Last seen: 3 hours ago</small>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <Link className="nav-link py-2 px-3 text-muted d-none d-lg-block" to="#"><i className="fa fa-camera" /></Link>
                                            <Link className="nav-link py-2 px-3 text-muted d-none d-lg-block" to="#"><i className="fa fa-video-camera" /></Link>
                                            <Link className="nav-link py-2 px-3 text-muted d-none d-lg-block" to="#"><i className="fa fa-gear" /></Link>
                                            <Link className="nav-link py-2 px-3 text-muted d-none d-lg-block" to="#"><i className="fa fa-info-circle" /></Link>
                                            <Link className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle" to="#"><i className="fa fa-bars" /></Link>
                                            {/* Mobile menu */}
                                            <div className="nav-item list-inline-item d-block d-xl-none">
                                                <div className="dropdown">
                                                    <Link className="nav-link text-muted px-0" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v" />
                                                    </Link>
                                                    <ul className="dropdown-menu shadow border-0">
                                                        <li><Link className="dropdown-item" to="/"><i className="fa fa-camera" /> Share Images</Link></li>
                                                        <li><Link className="dropdown-item" to="/"><i className="fa fa-video-camera" /> Video Call</Link></li>
                                                        <li><Link className="dropdown-item" to="/"><i className="fa fa-gear" /> Settings</Link></li>
                                                        <li><Link className="dropdown-item" to="/"><i className="fa fa-info-circle" /> Info</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ================== CHATTING SECTION --================= */}
                                    <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">

                                        <ChattingLeft cl_img={chat_img2} cl_dateTime="10:10AM, Today" cl_msg="Hi Nirav, how are you?" />

                                        <ChatRight cr_dateTime="10:12 AM, Today" cr_msg="Fine" />

                                        <ChattingLeft cl_img={chat_img2} cl_dateTime="10:20AM, Today" cl_msg="Hi Nirav, how are you?" />

                                        <ChatRight cr_dateTime="10:21 AM, Today" cr_msg="I told you I'm fine." />

                                    </ul>

                                    {/* =================== MESSAGE TYPING SECTION ====================*/}
                                    <div className="chat-message">
                                        <button className="btn btn-dark" type="button">Send</button>
                                        <textarea className="form-control" placeholder="Enter text here..." defaultValue={""} />
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

export default Communication