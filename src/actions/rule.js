export function loadComplete(data) {
	return {
		type: "RULE_DATA_LOADED",
		payload: data
	}
}

export function loadRules(club_id) {
	return function (dispatch) {
	    fetch('http://localhost:3000/clubs/' + club_id + '/rules.json')
	    .then(response => response.json())
      	.then(response => {
      		console.log(response);
      		dispatch( loadComplete(response) );
      	});
  	};
}