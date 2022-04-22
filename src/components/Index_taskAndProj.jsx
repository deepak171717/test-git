import React from 'react'
import { Link } from 'react-router-dom'

function Index_taskAndProj() {
  return (
    <div className="row g-3 mb-3 row-deck">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
              <h6 className="m-0 fw-bold">Top tasks</h6>
              <div className="report ms-3">
                <Link to="#" className="text-secondary underline">Project Report</Link>
              </div>
            </div>
            <div className="card-body">
              <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
                <div className="site-list w-25 mb-2 mb-sm-0">
                  Design Index Page
                </div>
                <div className="site-time">
                  <span className="bg-lightblue px-3 py-1 d-inline rounded">Design</span>
                  <span className="fw-bold ms-1">2h 10m</span>
                </div>
              </div>
              <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
                <div className="site-list w-25 mb-2 mb-sm-0">
                  Create Blog
                </div>
                <div className="site-time">
                  <span className="light-danger-bg px-3 py-1 d-inline rounded">Marketing</span>
                  <span className="fw-bold ms-1">4h 10m</span>
                </div>
              </div>
              <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
                <div className="site-list w-25 mb-2 mb-sm-0">
                  Authentication
                </div>
                <div className="site-time">
                  <span className="light-orange-bg px-3 py-1 d-inline rounded">Development</span>
                  <span className="fw-bold ms-1">1h 10m</span>
                </div>
              </div>
              <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
                <div className="site-list w-25 mb-2 mb-sm-0">
                  Crude oprtaion
                </div>
                <div className="site-time">
                  <span className="light-orange-bg px-3 py-1 d-inline rounded">Development</span>
                  <span className="fw-bold ms-1">1h 10m</span>
                </div>
              </div>
              <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
                <div className="site-list w-25 mb-2 mb-sm-0">
                  Create Logo
                </div>
                <div className="site-time">
                  <span className="bg-lightblue px-3 py-1 d-inline rounded">Design</span>
                  <span className="fw-bold ms-1">2h 10m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
              <h6 className="m-0 fw-bold">Top projects</h6>
              <div className="report ms-3">
                <Link to="#" className="text-secondary underline">Project Report</Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-3 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
                <div className="col"><div id="apex-circle-chart-one" /></div>
                <div className="col"><div id="apex-circle-chart-two" /></div>
                <div className="col"><div id="apex-circle-chart-three" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Index_taskAndProj