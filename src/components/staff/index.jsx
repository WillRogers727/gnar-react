import React, {Component} from 'react';
import { connect } from 'react-redux';
import {requestHoliday , loadStaff} from '../../actions/staff';
import { 
	Table, 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText
} from 'reactstrap';

class Staff extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			modal: false,
			days: 0
		}

		this.props.loadData();
	}

	startRequest(index) {
		this.setState({
			selected: index,
			modal: true
		});
	}

	closeModal() {
		this.setState({
			modal: false
		});
	}

	submitRequest() {
		this.props.sendRequest(this.state.selected , this.state.days);
		this.setState({
			modal: false,
			days:0,
			selected: null
		})
	}

	updateDays(e) {
		this.setState({
			days: e.currentTarget.value
		});
	}

	render() {

		const list = this.props.staff.map((person, index) => {
			return (
			  	<tr key={index}> 
					<td>{person.firstName} {person.lastName}</td>
					<td>{person.holidays}</td>
					<td>
						<Button color="primary" onClick={
							() => this.startRequest(index)
						}>
							Request
						</Button>
					</td>
				</tr>
			)
		});

		const modal = (
			<div className="modal">
				I AM A MODEL
			</div>
		)

		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
				<Modal isOpen={this.state.modal} toggle={this.closeModal.bind(this)} className={this.props.className}>
		          <ModalHeader toggle={this.closeModal.bind(this)}>Request Holiday</ModalHeader>
		          <ModalBody>
		             <Form>
				        <FormGroup>
				          <Label for="exampleSelect">Days</Label>
				          <p>To request more than 5 days please speak to your line manager</p>
				          <Input onChange={this.updateDays.bind(this)} type="select" name="select" id="exampleSelect">
				            <option>0</option>
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
				          </Input>
				        </FormGroup>
			          </Form>
		          </ModalBody>
		          <ModalFooter>
		            <Button color="primary" onClick={this.submitRequest.bind(this)}>Save</Button>
		            <Button color="secondary" onClick={this.closeModal.bind(this)}>Cancel</Button>
		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  staff: state.staff.list
});

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch( loadStaff() );
	},
	sendRequest: (user, days) => {
		dispatch(requestHoliday(user, days));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);