import React from 'react'
import { Link } from 'react-router-dom'

function Screenshots(props) {
    return (

        <div className="col">
            <div className="screen-card shadow-sm p-2">
                <Link to={props.imgLink}>
                    <img className="img-fluid img-thumbnail" src={props.imgLink} alt="" />
                </Link>
                <div className="user-profile d-flex align-items-center mt-3">
                    <img className="avatar rounded-circle" src={props.img} alt="profile" />
                    <div className="u-info ms-2">
                        <span className="fw-bold">{props.ss_name}</span><br/>
                        <span className="text-muted">{props.ss_time}</span>
                    </div>
                </div>
                <div className="user-activity d-flex justify-content-between">
                    <div className="keybord-block w-50 pe-1">
                        <i className="icofont-ui-keyboard " />
                        <div className="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={props.progress1_Value} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="mouse-block w-50 ps-1 text-end">
                        <i className="icofont-wireless-mouse " />
                        <div className="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={props.progress2_Value} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screenshots


