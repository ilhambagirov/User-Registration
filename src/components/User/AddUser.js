import React, { useState } from "react";
import formStyles from "../User/AddUser.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorModal({
        title: "Empty username and age!",
        message: "Please fill the both inputs then sumbit!",
      });
      return;
    }
    if (+age < 0) {
      setErrorModal({
        title: "Invalid Age!",
        message: "Please enter your age correctly!",
      });
      return;
    }
    props.onAddUser(username, age);
    setAge("");
    setUsername("");
  };

  const closeErrorModalHandler = () => {
    setErrorModal(null);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {errorModal != null && (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          onClose={closeErrorModalHandler}
        />
      )}
      <Card className={formStyles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={usernameChangeHandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age</label>
          <input
            value={age}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
