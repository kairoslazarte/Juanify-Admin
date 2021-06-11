import React from 'react'

export default function userTable() {
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
            <div class="col-lg-12 col-md-12">
                <div class="container shadow mt-4">
                    <div class="row m-1">
                        <h2> User List</h2>
                    </div>
                    <div class="col-12">
                        <form>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group mb-4">
                                        <input id="exampleFormControlInput1 " type="email" placeholder="What're you searching for?" class="form-control form-control-underlined" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <button type="submit" class="btn btn-primary rounded-pill btn-block w-25 shadow-sm">Search</button>
                                </div>
                                <div class="col-lg-4">
                                    <select class="form-control form-control-sm">
                                        <option>Show Entries</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary">COPY</button>
                            <button type="button" class="btn btn-secondary">CSV</button>
                            <button type="button" class="btn btn-secondary">EXCEL</button>
                            <button type="button" class="btn btn-secondary">PDF</button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="thead-inverse">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Image</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                    <th>Contact Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>responsive</td>
                                    <td>bootstrap</td>
                                    <td>cards</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,002</td>
                                    <td>rwd</td>
                                    <td>web designers</td>
                                    <td>theme</td>
                                    <td>responsive</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>
                                    <td>free</td>
                                    <td>open-source</td>
                                    <td>download</td>
                                    <td>template</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>
                                    <td>frontend</td>
                                    <td>developer</td>
                                    <td>coding</td>
                                    <td>card panel</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,004</td>
                                    <td>migration</td>
                                    <td>bootstrap 4</td>
                                    <td>mobile-first</td>
                                    <td>design</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,005</td>
                                    <td>navbar</td>
                                    <td>sticky</td>
                                    <td>jumbtron</td>
                                    <td>header</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>

                                </tr>
                                <tr>
                                    <td>1,006</td>
                                    <td>collapse</td>
                                    <td>affix</td>
                                    <td>submenu</td>
                                    <td>footer</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,007</td>
                                    <td>layout</td>
                                    <td>examples</td>
                                    <td>themes</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                </tr>
                                <tr>
                                    <td>1,008</td>
                                    <td>migration</td>
                                    <td>bootstrap 4</td>
                                    <td>flexbox</td>
                                    <td>design</td>
                                    <td>grid</td>
                                    <td>grid</td>
                                    <td>grid</td>

                                </tr>
                            </tbody>
                        </table>
                        <nav class="float-right m-2" aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* /.content */}
        </div>
    )
}
