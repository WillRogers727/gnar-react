import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import Club from '../club';
import Home from '../home';
import { withRouter } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/clubs' component={Club}/>
			</Switch>
		)
	}
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));