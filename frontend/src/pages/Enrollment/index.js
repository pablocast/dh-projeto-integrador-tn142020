import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { read, complete } from "../../components/core/api-enrollment.js";
import { Link } from "react-router-dom";
import auth from "../../components/auth/auth-helper";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Info from "@material-ui/icons/Info";
import CheckCircle from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { CardContent } from "@material-ui/core";
import Header from "../../components/core/HeaderPageCursos";

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(12),
    marginLeft: 250,
  }),
  heading: {
    marginBottom: theme.spacing(3),
    fontWeight: 200,
    marginTop: "150px",
  },
  flex: {
    display: "flex",
    marginBottom: 20,
  },
  card: {
    padding: "24px 40px 20px",
    marginTop: "150px",
  },
  lessoncard: {
    padding: "24px 40px 20px",
  },
  subheading: {
    margin: "10px",
    color: theme.palette.openTitle,
  },
  details: {
    margin: "16px",
  },
  sub: {
    display: "block",
    margin: "3px 0px 5px 0px",
    fontSize: "0.9em",
  },
  avatar: {
    color: "#9b9b9b",
    border: "1px solid #bdbdbd",
    background: "none",
  },
  media: {
    height: 180,
    display: "inline-block",
    width: "100%",
    marginLeft: "16px",
  },
  icon: {
    verticalAlign: "sub",
  },
  category: {
    color: "#5c5c5c",
    fontSize: "0.9em",
    padding: "3px 5px",
    backgroundColor: "#dbdbdb",
    borderRadius: "0.2em",
    marginTop: 5,
  },
  action: {
    margin: "8px 24px",
    display: "inline-block",
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#0052FB",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  selectedDrawer: {
    backgroundColor: "#e9e3df",
  },
  unselected: {
    backgroundColor: "#ffffff",
  },
  check: {
    color: "#38cc38",
  },
  subhead: {
    fontSize: "1.2em",
  },
  progress: {
    textAlign: "center",
    color: "#dfdfdf",
    "& span": {
      color: "#fffde7",
      fontSize: "1.15em",
    },
  },
  para: {
    whiteSpace: "pre-wrap",
  },
}));

export default function Enrollment({ match }) {
  const classes = useStyles();
  const [enrollment, setEnrollment] = useState({
    curso: {},
    aula_status: "",
    aula_info: [],
  });
  const [values, setValues] = useState({
    error: "",
    drawer: -1,
  });
  const [totalComplete, setTotalComplete] = useState(0);
  const jwt = auth.isAuthenticated();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(
      { enrollmentId: match.params.enrollmentId },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        totalCompleted(eval(data.aula_status));
        setEnrollment(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.enrollmentId]);

  const totalCompleted = (lessons) => {
    let count = lessons.reduce((total, lessonStatus) => {
      return total + (lessonStatus.complete ? 1 : 0);
    }, 0);
    setTotalComplete(count);
    return count;
  };

  const selectDrawer = (index) => (event) => {
    setValues({ ...values, drawer: index });
  };

  const markComplete = () => {
    if (!eval(enrollment.aula_status)[values.drawer].complete) {
      const updatedLessonStatus = eval(enrollment.aula_status);
      const lessonStatus = enrollment.aula_info;
      lessonStatus[values.drawer].complete = true;
      updatedLessonStatus[values.drawer].complete = true;

      let count = totalCompleted(lessonStatus);

      let updatedData = {};
      updatedData.lessonStatusId = values.drawer;
      updatedData.complete = true;

      if (count === lessonStatus.length) {
        updatedData.courseCompleted = Date.now();
      }

      complete(
        {
          enrollmentId: match.params.enrollmentId,
        },
        {
          t: jwt.token,
        },
        updatedData
      ).then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setEnrollment({ ...enrollment, aula_status: updatedLessonStatus });
        }
      });
    }
  };

  return (
    <>
      <AppBar position="fixed" style={{ zIndex: 12343455 }}>
        <Header className="HeaderEnroll" />
      </AppBar>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} style={{ paddingTop: 120 }} />
          <List>
            <ListItem
              button
              onClick={() => selectDrawer(-1)}
              className={
                values.drawer == -1
                  ? classes.selectedDrawer
                  : classes.unselected
              }
            >
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={"Visão do Curso"} />
            </ListItem>
          </List>
          <Divider />
          <List className={classes.unselected}>
            <ListSubheader component="div" className={classes.subhead}>
              Aulas
            </ListSubheader>
            {enrollment.aula_status &&
              eval(enrollment.aula_status).map((lesson, index) => (
                <ListItem
                  button={true}
                  key={index}
                  onClick={selectDrawer(index)}
                  className={
                    values.drawer === index
                      ? classes.selectedDrawer
                      : classes.unselected
                  }
                >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>{index + 1}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={lesson.lesson} />
                  <ListItemSecondaryAction>
                    {lesson.complete ? (
                      <CheckCircle className={classes.check} />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <div className={classes.progress}>
                    <span>{totalComplete}</span> dos{" "}
                    <span>
                      {enrollment.aula_status &&
                        eval(enrollment.aula_status).length}
                    </span>{" "}
                    completados
                  </div>
                }
              />
            </ListItem>
          </List>
        </Drawer>

        {values.drawer == -1 && enrollment.aula_status && (
          <Card className={classes.card}>
            <CardHeader
              title={enrollment.curso.curso_name}
              subheader={
                <div>
                  <span className={classes.category}>
                    {enrollment.curso.curso_description}
                  </span>
                </div>
              }
              action={
                totalComplete == eval(enrollment.aula_status).length && (
                  <span className={classes.action}>
                    <Button variant="contained" color="secondary">
                      <CheckCircle /> &nbsp; Finalizado
                    </Button>
                  </span>
                )
              }
            />
            <div className={classes.flex}>
              <CardMedia
                className={classes.media}
                title={enrollment.curso.curso_description}
              />
              <div className={classes.details}>
                <Typography variant="body1" className={classes.subheading}>
                  {enrollment.curso.curso_description}
                  <br />
                </Typography>
              </div>
            </div>
            <Divider />
            <div>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.subheading}>
                    Aulas
                  </Typography>
                }
                subheader={
                  <Typography variant="body1" className={classes.subheading}>
                    {eval(enrollment.aula_status).length} aulas
                  </Typography>
                }
              />
              <List>
                {eval(enrollment.aula_status).map((lesson, i) => {
                  return (
                    <span key={i}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>{i + 1}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={lesson.lesson} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </span>
                  );
                })}
              </List>
            </div>
          </Card>
        )}
        {values.drawer != -1 && (
          <>
            <Typography variant="h5" className={classes.heading}>
              {enrollment.curso.curso_name}
            </Typography>
            <Card className={classes.lessoncard}>
              <CardHeader
                title={eval(enrollment.aula_status)[values.drawer].lesson}
                action={
                  <Button
                    onClick={markComplete}
                    variant={
                      eval(enrollment.aula_status)[values.drawer].complete
                        ? "contained"
                        : "outlined"
                    }
                    color="secondary"
                  >
                    {eval(enrollment.aula_status)[values.drawer].complete
                      ? "Completado"
                      : "Marcar com Completado"}
                  </Button>
                }
              />
              <CardContent>
                <Typography variant="body1" className={classes.para}>
                  {/* {enrollment.course.lessons[values.drawer].content} */}
                </Typography>
              </CardContent>
              <CardActions>
                <a>
                  <Button variant="contained" color="#FFCF26">
                    Recurso Link
                  </Button>
                </a>
              </CardActions>
            </Card>
          </>
        )}
      </div>
    </>
  );
}
