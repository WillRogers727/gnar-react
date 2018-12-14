export function requestHoliday(user, days) {
	return {
		type: "REQUEST_HOLIDAY",
		days,
		user
	}
}

export function loadComplete(data) {
	return {
		type: "STAFF_DATA_LOADED",
		payload: data
	}
}

export function loadStaff() {
	return function (dispatch) {
	    fetch('http://localhost:3000/staffs.json')
	    .then(response => response.json())
      	.then(response => {
      		console.log(response);
      		dispatch( loadComplete(response) );
      	});
  	};
}