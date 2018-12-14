const initialState = {
	list: [
		{
			firstName: "Stephen",
			lastName: "Reid",
			holidays: 26
		},
		{
			firstName: "Owen",
			lastName: "Davies",
			holidays: 26
		},
		{
			firstName: "Munir",
			lastName: "Uddin",
			holidays: 26
		}
	]
}

export default (state = initialState, action) => {
 switch (action.type) {
  
  case "STAFF_DATA_LOADED": 

  return { list: action.payload }

  case "REQUEST_HOLIDAY":
  
  let newList = [...state.list];
  newList[action.user].holidays -= action.days;

  return {
  	list: newList
  }

  default:
   return state
 }
}