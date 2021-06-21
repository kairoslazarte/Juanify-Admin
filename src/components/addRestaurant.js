import React from 'react'
export default function addRestaurant() {
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
                                <li className="breadcrumb-item active">All Restaurant</li>
                                <li className="breadcrumb-item active">Add New Restaurant</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div class="col-lg-12 col-md-12">
                <div class="container shadow mt-4">
                    <div class="row m-1 col-12">
                        <div class="col-12">
                            <h2>Add New Restaurant
                                <button type="button" class="btn btn-primary px-3 float-right">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i>
                                </button>
                            </h2>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <p>Name</p>
                                    <div class="form-group mb-4">
                                        <input id="exampleFormControlInput1 " type="email" placeholder="Type here" class="form-control form-control-underlined" />
                                    </div>
                                    <p>Email Address</p>
                                    <div class="form-group mb-4">
                                        <input id="exampleFormControlInput1 " type="email" placeholder="Type here" class="form-control form-control-underlined" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <p>Contact Number</p>
                                    <div class="form-group mb-4">
                                        <input id="exampleFormControlInput1 " type="email" placeholder="Type here" class="form-control form-control-underlined" />
                                    </div>
                                    <p>Password</p>
                                    <div class="form-group mb-4">
                                        <input id="exampleFormControlInput1 " type="email" placeholder="Type here" class="form-control form-control-underlined" />
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary mb-2"><i class="fas fa-save pr-2" aria-hidden="true"></i>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.content */}
        </div >
    )
}
