import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadClubs} from '../../actions/club';
import Rule from '../rule';
import { 
	Table, 
	Button, 
	Label, 
	Input, 
	FormText,
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
} from 'reactstrap';

class Club extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		}
		this.props.loadData();
	}

	ruleRequest(index, name, id) {
		this.setState({
			selected: index,
			modal: true,
			clubname: name,
			club_id: id
		});
	}

	closeModal() {
		this.setState({
			modal: false
		});
	}

	render() {

		const list = this.props.club.map((club, index) => {
			return (
			  	<tr key={index}> 
					<td>{club.name}</td>
					<td>{club.description}</td>
					<td>{club.owner}</td>
					<td>
						<Button color="primary" onClick={
								() => this.ruleRequest(index, club.name, club.id)
							}>
								View Rules
						</Button>
					</td>
				</tr>
			)
		});


		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>Club Name</th>
							<th>Club Description</th>
							<th>Club Owner</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
				<Modal isOpen={this.state.modal} toggle={this.closeModal.bind(this)} className={this.props.className}>
		          <ModalHeader toggle={this.closeModal.bind(this)}>{this.state.clubname} Rule List</ModalHeader>
		          <ModalBody>
		          	<Rule club_id={this.state.club_id} />
		          </ModalBody>
		          <ModalFooter>
		            <Button color="secondary" onClick={this.closeModal.bind(this)}>Close</Button>
		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  club: state.club.list
});

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch( loadClubs() );
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Club);