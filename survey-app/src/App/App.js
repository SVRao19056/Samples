import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../assets/logo.svg";
import "../stylesheets/App.css";

import { getUsers } from "../actions";
import { REDUCER_TYPES, API_CLIENT } from "../constants";
import UserList from "../containers/UserList";

const mapDispatchToProps = dispatch => {
  //const boundActions = bindActionCreators({ getUsers }, dispatch);
  return {
    actionToDispatch: () => dispatch(getUsers()),
    dispatch
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store || `App no props `);
  }

  render() {
    return (
      <div>
        <h1>User Application</h1>
        <button onClick={this.props.actionToDispatch}>Get users</button>
        <UserList />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);

//export default connect()(App);
