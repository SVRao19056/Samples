import fetch from "fetch";
import axios from "axios";
import { call, put, all, takeEvery, takeLatest } from "redux-saga/effects";
import { REDUCER_TYPES, API_CLIENT } from "../constants";

/*class ApiClient {
  constructor(action) {
    this.url = API_CLIENT.URL;
    this.action = action;
  }

  getUsers = {
    *[Symbol.iterator]() {
      let users;
      let apiPayload = fetch(this.url);
      // .then( data => {  return  Object.assign([] ,data) })

      apiPayload
        .then(data => {
          users = Object.assign({}, data);
          console.log(users);
        })
        .catch(err => console.error(err, apiPayload));
      yield users;
    }
  };
}*/
async function callApi() {
  const response = await axios.get("https://randomuser.me/api/?results=10");
  // console.log(JSON.stringify(response));
  return response;
}
async function* catApiErrRes() {
  let res;
  try {
    res = await callApi();
  } catch (error) {
    console.log(error);
    res = null;
  } finally {
    console.log(
      typeof res === "object" && !res === null ? "res is null " : res
    );
    if (!res) console.log("call failed");
  }
  console.log(`catApiErrRes ${JSON.stringify(res)}`);
  yield res;
}
function* getData(action) {
  try {
    const data = yield call(callApi);
    // console.log(
    //   `called in getData data = ${JSON.stringify(
    //     data
    //   )}, action= ${JSON.stringify(action)}`
    // );
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
