/**
 * Style inspried by https://blog.logrocket.com/the-material-ui-grid-system/
 */
import { connect } from "react-redux";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import User from "../components/User";

const classes = {
  root: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    elevation: 0,
  },
  paper: {
    elevation: 0,
    padding: 20,
    textAlign: "center",
  },
  message: {},
};
class UserList extends Component {
  state = {
    users: [],
    searchString: "",
  };

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
          <div className={classes.root}>
            <Grid container spacing={2}>
              {userArr.map((curUser) => (
                <Grid item elevation={0}>
                  <User user={curUser} dataLoaded={dataReady} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Typography variant="h5">
            Users not yet loaded , click Get Users button to get first payload
          </Typography>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
    users: results,
  };
};
export default connect(mapStateToProps, null)(UserList);
