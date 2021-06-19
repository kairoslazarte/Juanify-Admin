import React from 'react'
import jollibee from '../images/jollibee1.jpg';
import mcdo from '../images/mcdo1.jpg';
export default function Dispatcher() {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">User List</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <ul class="nav mb-2 justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pending Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Approved Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Processing Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ongoing Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Completed Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cancelled Orders</a>
                </li>
            </ul>
            <div class="container shadow">
                <div class="card">
                    <h5 class="card-header">Approved Orders</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <img className=" custom-img col-xl-4 " src={mcdo}></img>
                                    <div class="col-md-6">
                                        <h5 class="card-title font-weight-bold mb-2 ml-2">Mcdonald's</h5>
                                        <p class="card-text ml-2 ">Status</p>
                                        <p class="card-text ml-2 ">Order No.</p>
                                        <p class="card-text ml-2 ">47 minutes</p>
                                        <p class="card-text ml-2">Branch</p>
                                        <p class="card-text ml-2 ">Delivery Location</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <img className=" custom-img col-xl-4" src={jollibee}></img>
                                    <div class="col-md-6">
                                        <h5 class="card-title font-weight-bold mb-2 ml-2">Jollibee</h5>
                                        <p class="card-text ml-2 ">Status</p>
                                        <p class="card-text ml-2 ">Order No.</p>
                                        <p class="card-text ml-2">47 minutes</p>
                                        <p class="card-text ml-2">Branch</p>
                                        <p class="card-text ml-2 ">Delivery Location</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.content */}
        </div>
    )
}
