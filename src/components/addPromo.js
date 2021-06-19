import React from 'react'

export default function addPromo() {
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
                                <li className="breadcrumb-item active">Promo Codes</li>
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
                            <h2>Add New Promo Codes</h2>
                        </div>
                        <div class="container">
                        </div>
                    </div>
                </div>
            </div>
            {/* /.content */}
        </div>
    )
}
