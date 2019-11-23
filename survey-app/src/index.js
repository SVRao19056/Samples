import React from "react";
import { render, ReactDOM } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import LocaleData from "../src/locale/en-EN";
import App from "../src/App/App";
import configureStore from "../src/store/config";
import initialState from "../src/store/initialState";
//import * as serviceWorker from "./serviceWorker";
import UserList from "./containers/UserList";

require(".\\stylesheets\\index.css");
const store = configureStore(initialState);

const renderApp = () => (
  <IntlProvider locale="en" messages={LocaleData}>
    <Provider store={store}>
      <AppContainer>
        <App>
          <UserList />
        </App>
      </AppContainer>
    </Provider>
  </IntlProvider>
);
const loadedStates = ["complete", "loaded", "interactive"];

function runOnLoaded() {
  render(renderApp(), document.getElementById("root"));
}

if (loadedStates.includes(document.readyState) && document.body) {
  runOnLoaded();
} else {
  window.addEventListener("DOMContentLoaded", runOnLoaded, false);
}
// Any other required files like fontawesome css and other css files you would like to be visible to the app
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
