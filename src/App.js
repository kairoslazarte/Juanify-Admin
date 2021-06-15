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
import userTable from './components/userTable'
import orderDeliveryList from './components/orderDeliveryList'
import Dispatcher from './components/Dispatcher'
import promo from './components/promo'

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
              <Route component={allRestaurant} exact={true} path="/allRestaurant"/>
              <Route component={allpendRestaurant} exact={true} path="/allpendRestaurant"/>
              <Route component={allrejectRestaurant} exact={true} path="/allrejectRestaurant"/>
              <Route component={orderDeliveryList} exact={true} path="/orderDeliveryList"/>
              <Route component={promo} exact={true} path="/promo"/>
            </Switch>
          </div>
        <Footer/>
    </Router>
  )
}
