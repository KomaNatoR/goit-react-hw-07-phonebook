import { SET_FILTER } from "./filter-types";

const initialState = "";

const filterReducer = (state = initialState, action) => {
    // console.log(action);

    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
        return state;
    };
};
export default filterReducer;