import React from 'react'
import juanMaleIcon from '../images/juanifynew.png';
export default function Menu() {
  return (

    <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img src={juanMaleIcon} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.9' }} />
        <span className="brand-text font-weight-light">Juanify Admin</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={juanMaleIcon} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Juanify</a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item has-treeview">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/Dispatcher" className="nav-link">
                <i className="nav-icon fas fa-desktop" />
                <p>
                  Dispatcher
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/forms" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                  Add User
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/userTable" className="nav-link" >
                <i className="nav-icon fas fa-user" />
                <p>
                  User
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="" className="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <i className="nav-icon fas fa-utensils" />
                <p>
                  Restaurant
                </p>
              </a>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <div class="list-group list-group-flush">
                    <a href="/allRestaurant" class="list-group-item list-group-item-action active" aria-current="true">
                      All Restaurant
                      {/* <span class="badge badge-primary badge-pill">14</span> */}
                    </a>
                    <a href="/allpendRestaurant" class="list-group-item list-group-item-action">Pending Restaurant</a>
                    <a href="/allrejectRestaurant" class="list-group-item list-group-item-action">Rejected Restaurant</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item has-treeview">
              <a href="" className="nav-link" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                <i className="nav-icon fas fa-box-open" />
                <p>
                  Delivery People List
                </p>
              </a>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body">
                  <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                      All Delivery Status
                      {/* <span class="badge badge-primary badge-pill">14</span> */}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Pending Delivery </a>
                    <a href="#" class="list-group-item list-group-item-action">Rejected Delivery </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item has-treeview">
              <a href="" className="nav-link" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                <i className="nav-icon fas fa-truck" />
                <p>
                  Order Delivery List
                </p>
              </a>
              <div class="collapse" id="collapseExample3">
                <div class="card card-body">
                  <div class="list-group list-group-flush">
                    <a href="/penddeliver" class="list-group-item list-group-item-action active" aria-current="true">
                      Pending Deliveries
                      {/* <span class="badge badge-primary badge-pill">14</span> */}
                    </a>
                    <a href="/approveddeliver" class="list-group-item list-group-item-action">Approved Deliveries</a>
                    <a href="/processdeliver" class="list-group-item list-group-item-action">Process Deliveries</a>
                    <a href="/ongoingdeliver" class="list-group-item list-group-item-action">Ongoing Deliveries</a>
                    <a href="/completeddeliver" class="list-group-item list-group-item-action">Completed Deliveries</a>
                    <a href="/cancelleddeliver" class="list-group-item list-group-item-action">Cancelled Deliveries</a>
                    
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-treeview">
              <a href="/promo" className="nav-link">
                <i className="nav-icon fas fa-money-bill-alt" />
                <p>
                  Promo Codes
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside >

  )
}
