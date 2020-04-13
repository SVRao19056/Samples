import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { makeStyles } from "@material-ui/styles";

/**
 * This renders the user
 * @param {user} this is the user object
 * User structure is here for reference src\sampleUser.json
 */
const useStyles = makeStyles({
  card: {
    maxWidth: 260,
    minWidth: 230,
    margin: 50,
  },
  media: {
    height: 100,
    // width: 100,
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
          image={user["picture"]["medium"]}
          title={user["name"]["first"] + " " + user["name"]["last"]}
        />
        <CardContent>
          <Typography>
            {`${user["name"]["first"]} ${user["name"]["last"]}`}
          </Typography>
          <MailOutlineIcon fontSize={"medium"}></MailOutlineIcon>{" "}
          <span>{user.email}</span>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </React.Fragment>
  ) : (
    <h4>No data</h4>
  );
};
export default User;
