import React from "react";
import { connect } from "react-redux";
import "../stylesheets/App.css";
import { getUsers } from "../actions";
import UserList from "../containers/UserList";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const mapDispatchToProps = (dispatch) => {
  return {
    actionToDispatch: () => dispatch(getUsers()),
    dispatch,
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store || `App no props `);
  }

  render() {
    return (
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h1" gutterBottom>
            User Profile Application
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.actionToDispatch}
          >
            Get users
          </Button>
          <div>
            <UserList />
          </div>
        </Grid>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
