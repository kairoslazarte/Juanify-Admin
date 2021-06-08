import React from 'react'

export default function Content() {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard v3</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div class="col-lg-9 col-md-8">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>responsive</td>
                                <td>bootstrap</td>
                                <td>cards</td>
                                <td>grid</td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>rwd</td>
                                <td>web designers</td>
                                <td>theme</td>
                                <td>responsive</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>free</td>
                                <td>open-source</td>
                                <td>download</td>
                                <td>template</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>frontend</td>
                                <td>developer</td>
                                <td>coding</td>
                                <td>card panel</td>
                            </tr>
                            <tr>
                                <td>1,004</td>
                                <td>migration</td>
                                <td>bootstrap 4</td>
                                <td>mobile-first</td>
                                <td>design</td>
                            </tr>
                            <tr>
                                <td>1,005</td>
                                <td>navbar</td>
                                <td>sticky</td>
                                <td>jumbtron</td>
                                <td>header</td>
                            </tr>
                            <tr>
                                <td>1,006</td>
                                <td>collapse</td>
                                <td>affix</td>
                                <td>submenu</td>
                                <td>footer</td>
                            </tr>
                            <tr>
                                <td>1,007</td>
                                <td>layout</td>
                                <td>examples</td>
                                <td>themes</td>
                                <td>grid</td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>migration</td>
                                <td>bootstrap 4</td>
                                <td>flexbox</td>
                                <td>design</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* /.content */}
        </div>
    )
}
