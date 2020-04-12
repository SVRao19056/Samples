import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

/**
 * This renders the user
 * @param {user} this is the user object
 * User structure is here for reference src\sampleUser.json
 */
const useStyles = makeStyles({
  card: {
    maxWidth: 180,
    margin: 50,
  },
  media: {
    height: 120,
    width: 120,
  },
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
          title={user["name"]["first"] + " " + user["name"]["last"]}
        />
        <CardContent>
          <Typography>
            {`${user["name"]["first"]} ${user["name"]["last"]}`}
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
