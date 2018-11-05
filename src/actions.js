import { ADD_DATA_POINT } from "./action-types";

export const addDataPoint = data => ({ 
	type : ADD_DATA_POINT,
	payload: data 
});