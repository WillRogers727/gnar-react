import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

class Header extends Component {

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
			<Navbar color="light" light expand="md">
	          <NavbarBrand href="/">GNAR App</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <Link to='/clubs'>Clubs</Link>
	              </NavItem>
	              <NavItem>
	                <NavLink>Profile</NavLink>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
		)
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);