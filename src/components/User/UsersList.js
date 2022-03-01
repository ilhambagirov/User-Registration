import React from "react";
import Card from "../UI/Card";
import classes from '../User/UsersList.module.scss'
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name} (user.age years old)</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;