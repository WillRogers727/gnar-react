export function loadComplete(data) {
	return {
		type: "CLUB_DATA_LOADED",
		payload: data
	}
}

export function loadClubs() {
	return function (dispatch) {
	    fetch('http://localhost:3000/clubs.json')
	    .then(response => response.json())
      	.then(response => {
      		console.log(response);
      		dispatch( loadComplete(response) );
      	});
  	};
}