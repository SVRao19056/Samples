import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";

/**
 * This renders the user
 * @param {user} this is the user object
 * User structure is here for reference src\sampleUser.json
 */
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 50,
    width: 50
  }
});
const User = ({ user, dataLoaded }) => {
  console.log(`DATALOADED = ${dataLoaded} ${JSON.stringify(user)}`);
  const classes = useStyles();
  return dataLoaded ? (
    <React.Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={user["picture"]["thumbnail"]}
          title={user["name"]["first"]}
        />
        <CardContent>
          <Typography>
            name = {`${user["name"]["first"]} ${user["name"]["last"]}`}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </React.Fragment>
  ) : (
    <h4>No data</h4>
  );
};
export default User;
