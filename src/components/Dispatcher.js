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
            {/* <ul class="nav nav-tabs mb-2 justify-content-center">
                <li class="nav-item ">
                    <a class="nav-item nav-link" id="Active" data-toggle="tab" role="tab" aria-controls="activeOrders" aria-selected="true" href="#nav-active">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="pendingOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Pending Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="approveOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Approved Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="processOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Processing Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="ongoinOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Ongoing Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="completedOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Completed Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" id="cancelledOrder" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" href="#" href="#">Cancelled Orders</a>
                </li>
            </ul> */}

            <div class="container">
                <div class="row ">
                    <div class="col-12">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="activeOrders" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-active" aria-selected="true">Active Orders</a>
                                <a class="nav-item nav-link" id="pendingOrders" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-pendOrder" aria-selected="false">Pending Orders</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Approved Orders</a>
                                <a class="nav-item nav-link" id="nav-process-Order-tab" data-toggle="tab" href="#processOrders" role="tab" aria-controls="nav-processOrder" aria-selected="false">Processing Orders</a>
                                <a class="nav-item nav-link" id="nav-ongoing-Order-tab" data-toggle="tab" href="#ongoingOrders" role="tab" aria-controls="nav-ongoingOrder" aria-selected="false">Ongoing Orders</a>
                                <a class="nav-item nav-link" id="nav-completed-Order-tab" data-toggle="tab" href="#completedOrders" role="tab" aria-controls="nav-completedOrder" aria-selected="false">Completed Orders</a>
                                <a class="nav-item nav-link" id="nav-Cancelled-Order-tab" data-toggle="tab" href="#cancelledOrders" role="tab" aria-controls="nav-cancelledOrder" aria-selected="false">Cancelled Orders</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="activeOrders">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Active Orders</h5>
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
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Pending Orders</h5>
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
                            </div>

                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
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
                            </div>

                            <div class="tab-pane fade" id="processOrders" role="tabpanel" aria-labelledby="nav-process-Order-tab">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Processing Orders</h5>
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
                            </div>

                            <div class="tab-pane fade" id="ongoingOrders" role="tabpanel" aria-labelledby="nav-ongoing-Order-tab">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Ongoing Orders</h5>
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
                            </div>

                            <div class="tab-pane fade" id="completedOrders" role="tabpanel" aria-labelledby="nav-completed-Order-tab">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Completed Orders</h5>
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
                            </div>
                            <div class="tab-pane fade" id="cancelledOrders" role="tabpanel" aria-labelledby="nav-cancelled-Order-tab">
                                <div class="container shadow">
                                    <div class="card">
                                        <h5 class="card-header">Cancelled Orders</h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* /.content */}
        </div>
    )
}
