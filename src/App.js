import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import Menu from './components/Menu'
import Forms from './components/Forms'
import NewProduct from './components/NewProduct'
import allRestaurant from './components/allRestaurant'
import allpendRestaurant from './components/allpendRestaurant'
import allrejectRestaurant from './components/allrejectRestaurant'
import addRestaurant from './components/addRestaurant'
import alldeliveryPeople from './components/alldeliveryPeople'
import allpendingPeople from './components/pendingdeliveryPeople'
import allrejectdeliPeople from './components/rejecteddeliveryPeople'
import adddeliveryPeople from './components/adddeliveryPeople'
import userTable from './components/userTable'
import addUser from './components/addUser'
import orderDeliveryList from './components/orderDeliveryList'
import pendingDeliveryList from './components/pendingDeliveriesList'
import approveddeliveryList from './components/approvedDeliveries'
import processDeliveryList from './components/ProcessDeliveries'
import ongoingDeliveryList from './components/ongoingDeliveries'
import completedDeliveryList from './components/completedDeleveries'
import compltedDeliveryList from './components/cancelledDeliveries'
import Dispatcher from './components/Dispatcher'
import promo from './components/promo'
import addPromo from './components/addPromo'

import './style.css';
export default function App() {
  return (
    <Router>
      <Header/>
        <Menu/>
          <div>
            <Switch>
              <Route component={Content} exact={true} path="/"/>
              <Route component={Dispatcher} exact={true} path="/Dispatcher"/>
              <Route component={Forms} exact={true} path="/forms"/>
              <Route component={NewProduct} exact={true} path="/newproduct"/>
              <Route component={userTable} exact={true} path="/userTable"/>
              <Route component={addUser} exact={true} path="/addUser"/>
              <Route component={allRestaurant} exact={true} path="/allRestaurant"/>
              <Route component={allpendRestaurant} exact={true} path="/allpendRestaurant"/>
              <Route component={allrejectRestaurant} exact={true} path="/allrejectRestaurant"/>
              <Route component={addRestaurant} exact={true} path="/addRestaurant"/>
              <Route component={alldeliveryPeople} exact={true} path="/alldeliveryPeople"/>
              <Route component={allpendingPeople} exact={true} path="/pendingdeliveryPeople"/>
              <Route component={allrejectdeliPeople} exact={true} path="/rejecteddeliveryPeople"/>
              <Route component={adddeliveryPeople} exact={true} path="/adddeliveryPeople"/>
              <Route component={orderDeliveryList} exact={true} path="/orderDeliveryList"/>
              <Route component={pendingDeliveryList} exact={true} path="/penddeliver"/>
              <Route component={approveddeliveryList} exact={true} path="/approveddeliver"/>
              <Route component={processDeliveryList} exact={true} path="/processdeliver"/>
              <Route component={ongoingDeliveryList} exact={true} path="/ongoingdeliver"/>
              <Route component={completedDeliveryList} exact={true} path="/completeddeliver"/>
              <Route component={compltedDeliveryList} exact={true} path="/cancelleddeliver"/>
              <Route component={promo} exact={true} path="/promo"/>
              <Route component={addPromo} exact={true} path="/addPromo"/>
            </Switch>
          </div>
        <Footer/>
    </Router>
  )
}
