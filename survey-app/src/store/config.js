import "regenerator-runtime/runtime";
import { createStore, compose, applyMiddleware } from "redux";
import DevTools from "../containers/DevTools";
import thunk from "redux-thunk";
//import * as R from "ramda";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas/userSaga";

const sagaMiddlewareObj = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const logger = ({ getState }) => next => action => {
    //TODO: log action before it is triggered
    return next(action);
  };

  //filter in only app reducers exclude others
  /*
    This  causes this  error 
    It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.
    */
  //const composeEnchancers =
  //  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  //   : compose;

  const myStore = createStore(
    rootReducer,
    /*initialState,*/
    /* applyMiddleware(sagaMiddlewareObj)*/
    compose(
      applyMiddleware(thunk, logger, sagaMiddlewareObj),
      DevTools.instrument()
    )
  );

  sagaMiddlewareObj.run(rootSaga);
  /**TODO:// research why this dos not work  */
  //execute the sagas
  // R.forEachObjIndexed(saga => {
  //   sagaMiddlewareObj.run(saga);
  // }, rootSaga); //collection of sagas rename later

  return myStore;
}
