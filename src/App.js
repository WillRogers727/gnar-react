import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Club from './components/club';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: false
	    };
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

  	render() {
	    return (
	      <div className="App">
	      	<Navbar color="light" light expand="md">
	          <NavbarBrand href="/">GNAR App</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink>My Club</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink>Profile</NavLink>
	              </NavItem>
	              <UncontrolledDropdown nav inNavbar>
	                <DropdownToggle nav caret>
	                  Menu
	                </DropdownToggle>
	                <DropdownMenu right>
	                  <DropdownItem>
	                    All Clubs
	                  </DropdownItem>
	                  <DropdownItem>
	                    Members
	                  </DropdownItem>
	                  <DropdownItem divider />
	                  <DropdownItem>
	                    Log Out
	                  </DropdownItem>
	                </DropdownMenu>
	              </UncontrolledDropdown>
	            </Nav>
	          </Collapse>
	        </Navbar>
	      	<h1>All Clubs</h1>
	        <Club />
	      </div>
	    );
  	}
}

export default App;
