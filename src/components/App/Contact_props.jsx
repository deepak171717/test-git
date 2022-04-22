import React from 'react'
import { Link } from 'react-router-dom'


function Contact_props(props) {
    return (
        <li className="list-group-item px-md-4 py-3 py-md-4">
            <Link to="#" className="d-flex">
                <img className="avatar rounded" src={props.contact_img} alt="" />
                <div className="flex-fill ms-3 text-truncate">
                    <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">{props.contact_name}</h6>
                        <div className="text-muted">
                            <i className="fa fa-heart-o pl-2 text-danger" />
                            <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                    </div>
                    <span className="text-muted">{props.contact_email}</span>
                </div>
            </Link>
        </li>)
}

export default Contact_props