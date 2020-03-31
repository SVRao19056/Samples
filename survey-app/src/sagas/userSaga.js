import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { REDUCER_TYPES } from "../constants";

async function callApi() {
  const response = await axios.get("https://randomuser.me/api/?results=10");
  return response;
}
// async function* catApiErrRes() {
//   let res;
//   try {
//     res = await callApi();
//   } catch (error) {
//     console.log(error);
//     res = null;
//   } finally {
//     console.log(
//       typeof res === "object" && !res === null ? "res is null " : res
//     );
//     if (!res) console.log("call failed");
//   }
//   console.log(`catApiErrRes ${JSON.stringify(res)}`);
//   yield res;
// }
function* getData(action) {
  try {
    const data = yield call(callApi);
    yield put({
      type: REDUCER_TYPES.GET_USERS_REQ_COMPLETED,
      data: data.data || {}
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: REDUCER_TYPES.GET_USER_FETCH_FAILED,
      data: error || {}
    });
  }
}
function* actionWatcher() {
  yield takeLatest(REDUCER_TYPES.GET_USERS_REQ_STARTED, getData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
