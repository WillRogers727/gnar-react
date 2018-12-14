import React, {Component} from 'react';
import { connect } from 'react-redux';

class Example extends Component {
	render() {
		return (
			<p>{this.props.message}</p>
		)
	}
}

const mapStateToProps = state => ({
  message: state.example.message
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Example);