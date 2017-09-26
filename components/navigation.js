import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-server';
import {Navbar, Nav, NavItem} from '../node_modules/react-server';
import './App.css';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import Login from './login';

//const {Link} = require("react-server");
//const About = () => <Link path="/about">About</Link>
const links = [
	{
		label: "About",
		path: "/about",
		internal: true,
	},
	{
		label: "Blog",
		path: "/blog",
		internal: true,
  },
  {
		label: "Contact",
		path: "/contact",
		internal: true,
  },
  {
		label: "Resume",
		path: "/resume",
		internal: true,
	},
	{
		label: "GitHub",
		path: "https://github.com/jennhaggerty",
		internal: false,
	},
]

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //show: false
    };
  }
  render() {
    const self = this;
    const contextualProjects = (props) => {
      return (
        <Projects
          loggedIn={self.props.loggedIn}
          {...props}
       />
      )
    }
    return (
      <Router>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/about" id="NavItem">
                JENNIFER HAGGERTY
              </Link>
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="navButton">
          <Nav>
            <NavItem><Link to="/about" id="NavItem">About</Link></NavItem>
            <NavItem><Link to="/projects" id="NavItem">Blog</Link></NavItem>
            <NavItem><Link to="/contact" id="NavItem">Contact</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/resume" id="NavItem">Resume</Link></NavItem>
            <NavItem><Link to="/github" id="NavItem">Github</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Router>
    )
  }
}