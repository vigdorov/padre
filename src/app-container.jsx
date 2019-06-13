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

import AddShop from './pages/add-shop';

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
            order: [
              {date: '', priority: '', type: '', desc: ''},
              {date: '', priority: '', type: '', desc: ''},
              {date: '', priority: '', type: '', desc: ''},
            ]
          }
        }
      ]
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

  handleEditShop = () => {

  };

  handleDeleteShop = () => {

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
            <Route path='/shops' component={() => <Shops shops={this.state.shops}/>} />
            <Route path='/to' component={() => <TechnicalService />} />
            <Route path='/mail' component={() => <Mail />} />
            <Route path='/settings' component={() => <Settings />} />
            <Route path='/add-shop' component={() => <AddShop onAdd={this.handleAddShop} />} />
          </div>
          <BottomPanel />
        </Router>
      </div>
    );
  }
}
