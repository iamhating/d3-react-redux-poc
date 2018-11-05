import { ADD_DATA_POINT } from "./action-types";

const initialState = {
	counter : 0,
	plotData : [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DATA_POINT:
			if (state.counter >= 15) {
				return Object.assign({}, state,
						{ counter : state.counter + 1, 
						  plotData : state.plotData.slice(1).concat([{ "x" : state.counter + 1, 
																	   "y" : action.payload }])
						});
			}
			else {
				return Object.assign({}, state,
						{ counter : state.counter + 1, 
						  plotData : state.plotData.slice().concat([{ "x" : state.counter + 1, 
																	  "y" : action.payload }]) 
						});
			}
		default:
			return state;
	}
};

export default rootReducer;