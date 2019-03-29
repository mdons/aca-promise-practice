import React, { Component, Fragment } from "react";
import { Button, Card, Typography, CardContent } from "@material-ui/core";
import { connect } from "react-redux";

class Users extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: []
  //   };
  // }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // this.setState({
        //   users: data
        // });
        this.props.setUsers(data);
      });
  };

  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">
            Get Users
          </Button>
        </div>
        <div className="users-block">
          {this.props.users.map(user => (
            <Card key={user.id}>
              <CardContent>
                <Typography>name: {user.name}</Typography>
                <Typography>username: {user.username}</Typography>
                <Typography>email: {user.email}</Typography>
                <Typography>website: {user.website}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: usersArr =>
      dispatch({
        type: "SET_USERS",
        value: usersArr
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
