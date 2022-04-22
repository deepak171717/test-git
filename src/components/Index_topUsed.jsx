import React from 'react'
import { Link } from 'react-router-dom'


function Index_topUsed() {
  return (
    <div class="row g-3 mb-3 row-deck">
    <div className="col-lg-12 col-xl-6">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
          <h6 className="m-0 fw-bold">Top used web &amp; app</h6>
          <div className="report ms-3">
            <Link to="#" className="text-secondary underline">Website &amp; App</Link>
          </div>
        </div>
        <div className="card-body">
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> linkedin.Com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">2h 10m</span>
            </div>
          </div>
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> my.indeed.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">3h 30m</span>
            </div>
          </div>
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> in.indeed.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">1h 10m</span>
            </div>
          </div>
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> mail.google.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">2h 10m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12 col-xl-6">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 py-3">
          <h6 className="m-0 fw-bold">Unproductive web &amp; app</h6>
          <div className="report ms-3">
            <Link to="#" className="text-secondary underline">Website &amp; App</Link>
          </div>
        </div>
        <div className="card-body">
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> my.indeed.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">1h 10m</span>
            </div>
          </div>
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> my.indeed.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">1h 20m</span>
            </div>
          </div>
          <div className="site-block-list d-flex align-items-center flex-wrap justify-content-sm-between mb-3">
            <div className="site-list w-30">
              <i className="icofont-world pe-2 fs-5" /> my.indeed.com
            </div>
            <div className="site-progress w-25 my-2 my-sm-0">
              <div className="progress" style={{height: '5px'}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="site-time">
              <span className="fw-bold">1h 10m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Index_topUsed