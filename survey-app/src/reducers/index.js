import { combineReducers } from "redux";
import initialState from "../store/initialState";
import { REDUCER_TYPES } from "../constants";

const randomReducer = (state = initialState, action) => {
  // Write your reducer here
  console.log("in randomReducer");
};
const startReq = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case REDUCER_TYPES.GET_USERS_REQ_COMPLETED: {
      updatedState = Object.assign({}, state, {
        results: action.data,
        fetching: false
      });
      // console.log(
      //   `called in startReq type = ${action.type}
      //   state = ${JSON.stringify(updatedState)},
      //    action= ${JSON.stringify(action)}`
      // );
      console.log(`called in startReq type = ${action.type} `);
      break;
    }
    case REDUCER_TYPES.GET_USERS_REQ_STARTED: {
      updatedState = Object.assign({}, state, {
        fetching: true
      });
      // console.log(
      //   `called in startReq type = ${action.type}
      //   state = ${JSON.stringify(updatedState)},
      //    action= ${JSON.stringify(action)}`
      // );
      console.log(`called in startReq type = ${action.type}`);
      break;
    }
    default: {
      updatedState = state;
      console.log(
        `called in startReq default step state = ${JSON.stringify(
          updatedState
        )}, action= ${JSON.stringify(action)}`
      );
      break;
    }
  }
  return updatedState;
};
const rootReducer = combineReducers({
  startReq
});
export default rootReducer;
