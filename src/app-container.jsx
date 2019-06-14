import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app-container.scss';
import './assets/fonts.css';

import LocalStorage from './functions/local-storage';
import StateWorker from './functions/state-worker';

import Shops from './pages/shops';
import TechnicalService from './pages/technical-service';
import GeneralTasks from './pages/general-tasks';
import Mail from './pages/mail';
import Settings from './pages/settings';

import AddShop from './pages/shops/add-shop';
import EditShop from './pages/shops/edit-shop';

import BottomPanel from './components/bottom-panel';


export default class AppContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      shops: [
        {
          id: 100,
          address: 'Гатчина',
          tasks: {
            to: { date: '12.05.2015', check: true, desc: ''},
            order: {
              low: [],
              normal: [],
              high: []
            }
          }
        }
      ],
      editIndex: 0,
    };
  }

  getStorage = () => {
    let localShops = LocalStorage.getItem('shops', true) || [];

    this.setState({
      shops: localShops
    });
  };

  setStorage = () => {
    LocalStorage.setItem('shops', this.state.shops, true);
  };

  handleAddShop = (shop) => {
    let newShops = StateWorker.createShop(this.state, shop);
    this.setState({
      shops: [ ...newShops ]
    }, this.setStorage);
  };

  handleEditShop = (shop) => {
    let newShops = StateWorker.editShop(this.state, shop);
    this.setState({
      shops: [ ...newShops ]
    }, this.setStorage);
  };

  handleChangeEditIndex = (index) => {
    this.setState({
      editIndex: index
    });
  };

  handleDeleteShop = () => {
    let id = this.state.editIndex,
        newShops = this.state.shops.slice();

    newShops.splice(id, 1);
    this.setState({
      shops: [ ...newShops]
    }, this.setStorage);
  };

  componentDidMount () {
    this.getStorage();
  }

  render () {
    return (
      <div className="app-container">
        <Router>
          <div className="body-content">
            <Route path='/' exact component={() => <GeneralTasks />} />
            <Route path='/shops' component={() => <Shops shops={this.state.shops} onEdit={this.handleChangeEditIndex}/>} />
            <Route path='/to' component={() => <TechnicalService shops={this.state.shops} />} />
            <Route path='/mail' component={() => <Mail />} />
            <Route path='/settings' component={() => <Settings />} />
            <Route path='/add-shop' component={() => <AddShop onAdd={this.handleAddShop} />} />
            <Route path='/edit-shop' component={() => {
              let { editIndex: id, shops } = this.state;
              return (
                <EditShop onEdit={this.handleEditShop}
                          onDelete={this.handleDeleteShop}
                          shop={shops[id]}
                />
              );
            }} />
          </div>
          <BottomPanel />
        </Router>
      </div>
    );
  }
}
