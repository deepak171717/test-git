import React from "react";
import "./dash.css";
import { FaUsers,FaChartBar,FaChartPie } from "react-icons/fa";
import {FiPercent} from "react-icons/fi"
import {BiUpArrowAlt,BiDownArrowAlt} from "react-icons/bi"
import Table from "./table";

const Dash = () => {
  return (
    <>
      <div className="dashboard">
        <div className="navi">
          <nav className="navbar">
            <div className="row mt-3">
              <div className="cont col-6">
                <h5 className="nav-h5 text-white mx-4">Costomer List</h5>
              </div>
              <div className="form col-6">
                <form action="" className="flex">
                  <div className="">
                    <input
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </div>
                  <div className="user">
                      <img src="https://demo.dashboardpack.com/architectui-angular-pro/assets/images/avatars/2.jpg"
                       alt="" 
                       className="img-t hed-img"/>
                  </div>
                </form>
              </div>
            </div>
          </nav>
          <div className="box">
            <div className="row mt-5 mx-2">
              <div className="col-3 detail mx-3">
                <div className="det-cot mt-2 mx-2">
                  <span>TRAFFIC</span>
                  <h3>350,897</h3>
                  <p>
                      <i><BiUpArrowAlt id="uoarrow"/></i>
                    <span id="sp1">3.48%</span> since last month
                  </p>
                </div>
                <span className="icon2">
                  <i>
                    <FaChartBar />
                  </i>
                </span>
              </div>
              <div className="col-3 detail mx-3">
                <div className="det-cot mt-2 mx-2">
                  <span>NEW USER</span>
                  <h3>2,356</h3>
                  <p><i><BiDownArrowAlt id="downarrow"/></i><span id="sp2">3.48%</span>  since last week</p>
                </div>
                <span className="icon2 icon-box1">
                  <i>
                    <FaChartPie />
                  </i>
                </span>
              </div>
              <div className="col-3 detail mx-3">
                <div className="det-cot mt-2 mx-2">
                  <span>SALES</span>
                  <h3>924</h3>
                  <p><i><BiDownArrowAlt id="downarrow"/></i><span id="sp2">1.10%</span>  since yesterday</p>
                </div>
                <span className="icon2 icon-box2">
                  <i>
                    <FaUsers />
                  </i>
                </span>
              </div>
              <div className="col-3 detail mx-3">
                <div className="det-cot mt-2 mx-3">
                  <span>PERFORMANCE</span>
                  <h3>49.65%</h3>
                  <p ><i><BiUpArrowAlt id="uoarrow"/></i><span id="sp1">12%</span> since last month</p>
                </div>
                <span className="icon2 icon-box3">
                  <i>
                    <FiPercent />
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Table/>
      </div>
    </>
  );
};

export default Dash;
