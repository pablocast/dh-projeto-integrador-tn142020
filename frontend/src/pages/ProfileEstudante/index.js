import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Header from "../../components/core/HeaderPageCursos";
import { listCourses } from "./../../components/core/api-course";
import { listEnrolled } from "./../../components/core/api-enrollment";
import auth from "./../../components/auth/auth-helper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Enrollments from "../../components/core/Enrollments";
import Courses from "../../components/core/Courses";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "90%",
    margin: "auto",
    marginTop: 20,
    marginBottom: theme.spacing(2),
    padding: 20,
    backgroundColor: "#EAEFF5",
  },
  extraTop: {
    marginTop: theme.spacing(12),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  gridList: {
    width: "100%",
    minHeight: 200,
    padding: "16px 0 10px",
  },
  tile: {
    textAlign: "center",
  },
  image: {
    height: "100%",
  },
  tileBar: {
    backgroundColor: "rgba(0, 0, 0, 0.72)",
    textAlign: "left",
  },
  enrolledTitle: {
    color: "black",
    marginBottom: 5,
  },
  action: {
    margin: "0 10px",
  },
  enrolledCard: {
    backgroundColor: "#fff",
  },
  divider: {
    marginBottom: 16,
    backgroundColor: "rgb(157, 157, 157)",
  },
  noTitle: {
    color: "lightgrey",
    marginBottom: 12,
    marginLeft: 8,
  },
}));

const ProfileCursos = (props) => {
  const classes = useStyles();
  const { username } = props.location.state;
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const jwt = auth.isAuthenticated();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listEnrolled({ t: jwt.token }, signal).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEnrolled(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listCourses(signal).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCourses(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header username={username} />
      <Card className={`${classes.card} ${classes.enrolledCard}`}>
        <Typography
          variant="h6"
          component="h2"
          className={classes.enrolledTitle}
        >
          Cursos em que você está inscrito
        </Typography>
        {enrolled.length !== 0 ? (
          <Enrollments enrollments={enrolled} />
        ) : (
          <Typography variant="body1" className={classes.noTitle}>
            Nenhum curso
          </Typography>
        )}
      </Card>
      <Card className={classes.card}>
        <Typography variant="h5" component="h2">
          Todos os cursos
        </Typography>
        {courses.length != 0 && courses.length != enrolled.length ? (
          <Courses courses={courses} common={enrolled} />
        ) : (
          <Typography variant="body1" className={classes.noTitle}>
            No new courses.
          </Typography>
        )}
      </Card>
    </>
  );
};

export default ProfileCursos;
