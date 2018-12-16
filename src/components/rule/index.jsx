import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadRules} from '../../actions/rule';
import { Table } from 'reactstrap';

class Rule extends Component {

	constructor(props) {
		super(props);
		this.props.loadData(this.props.club_id);
	}

	render() {

		const list = this.props.rule.map((rule, index) => {
			return (
			  	<tr key={index}> 
					<td>{rule.title}</td>
					<td>{rule.description}</td>
					<td>{rule.points}</td>
				</tr>
			)
		});

		return (
			<Table>
				<thead>
					<tr>
						<th>Rule</th>
						<th>Description</th>
						<th>Points</th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</Table>
		)
	}
}

const mapStateToProps = state => ({
  rule: state.rule.list
});

const mapDispatchToProps = dispatch => ({
	loadData: (club_id) => {
		dispatch( loadRules(club_id) );
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Rule);