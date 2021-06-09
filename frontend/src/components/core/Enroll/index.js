import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "../api-enrollment";
import auth from "../../auth/auth-helper";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    minWidth: 500,
  },
  button: {
    backgroundColor: "#FFCF26",
    color: "black",
  },
}));

export default function Enroll(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    enrollmentId: "",
    error: "",
    redirect: false,
  });
  const jwt = auth.isAuthenticated();
  const clickEnroll = () => {
    create(
      {
        courseId: props.courseId,
      },
      {
        t: jwt.token,
      }
    ).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data);
        setValues({
          ...values,
          enrollmentId: data.inscricao_id,
          redirect: true,
        });
      }
    });
  };

  if (values.redirect) {
    return <Redirect to={"/learn/" + values.enrollmentId} />;
  }

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={clickEnroll}
    >
      {" "}
      Matricular{" "}
    </Button>
  );
}

Enroll.propTypes = {
  courseId: PropTypes.string.isRequired,
};
