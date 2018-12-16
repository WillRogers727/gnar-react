const initialState = {
	list: []
}

export default (state = initialState, action) => {
 switch (action.type) {
  
  case "CLUB_DATA_LOADED": return { list: action.payload }

  default:
   return state
 }
}