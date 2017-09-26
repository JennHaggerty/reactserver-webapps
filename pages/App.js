import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';
import Header from '../components/header';
import Logout from '../components/logout';
import config from '../config';

export default class App extends Component {
  constructor(props) {
    super(props);

    var self = this;
    this.state = {
      user: {},
      loggedIn: false,
      toggleLogin: function(value) {
        self.setState({
          loggedIn: value
        }) 
      }
    };
  }

  handleRoute(next) {
		// Kick off data requests here.
		return next();
	}
	getTitle() {
		return "Jennifer Haggerty, a Full Stack Web Developer";
	}
	getHeadStylesheets() {
		return [
				"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
		]
	}

  componentDidMount() {
    if(localStorage.token && this.state.loggedIn === false) {
      this.state.toggleLogin(true);
    }
  }

  getUser() {
    //var url = window.location.hash.slice(1);
    axios.get(config.server)
      .then(res => {
        this.setState({ 
          user: res.data
        });
      });
  }


  getElements() {
      return [
        <div className="container">
          <Header />
          <div id="loggedin">
            { !this.state.loggedIn
              ? null
              : <Logout toggleLogin={this.state.toggleLogin} />
            }
          </div>
        </div>
      ];
  }
}