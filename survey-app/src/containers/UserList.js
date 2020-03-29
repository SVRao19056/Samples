import { connect } from "react-redux";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import User from "../components/User";

class UserList extends Component {
  state = {
    users: [],
    searchString: ""
  };

  getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps loaded");

    // this.setState({ users: Object.values(props.users) });
  }
  componentWillRecieveProps(props) {
    console.log(...{ name: "componentWillRecieveProps" });
  }

  render() {
    let dataReady =
      Object.keys(this.props.users)[0] === "status" ? false : true;
    const userArr = Object.values(this.props.users);
    console.log(`USERLIST ${userArr} ${typeof userArr} `);
    return (
      <div>
        {dataReady ? (
          <Grid container spacing={24} style={{ padding: 24 }}>
            {userArr.map(curUser => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <User user={curUser} dataLoaded={dataReady} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h4>No users </h4>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const results = !state.startReq.results
    ? { status: `${!state.fetching ? "none" : "fetching data"}` }
    : !state.startReq.results
    ? { data: "no data" }
    : state.startReq.results.results;

  console.log(
    `mapStateToProps state  = ${JSON.stringify(
      state
    )} results = ${JSON.stringify(results)}`
  );

  return {
    users: results
  };
};
export default connect(mapStateToProps, null)(UserList);
