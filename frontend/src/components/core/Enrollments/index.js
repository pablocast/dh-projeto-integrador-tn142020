import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CompletedIcon from "@material-ui/icons/VerifiedUser";
import InProgressIcon from "@material-ui/icons/DonutLarge";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  container: {
    minWidth: "100%",
    paddingBottom: "14px",
  },
  gridList: {
    width: "100%",
    minHeight: 100,
    padding: "12px 0 10px",
  },
  tile: {
    textAlign: "center",
  },
  image: {
    height: "100%",
  },
  tileBar: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    textAlign: "left",
  },
  tileTitle: {
    fontSize: "1.1em",
    marginBottom: "5px",
    color: "#fffde7",
    display: "block",
  },
  action: {
    margin: "0 10px",
  },
  progress: {
    color: "#b4f8b4",
  },
}));

export default function Enrollments(props) {
  const totalCompleted = (lessons) => {
    let count = lessons.reduce((total, lessonStatus) => {
      return total + (lessonStatus.complete ? 1 : 0);
    }, 0);
    let completed = count === lessons.length && lessons.length > 0 ? 1 : 0;
    return completed;
  };

  const classes = useStyles();
  return (
    <div>
      <GridList cellHeight={120} className={classes.gridList} cols={4}>
        {props.enrollments.map((course, i) => (
          <GridListTile key={i} className={classes.tile}>
            <Link to={"/learn/" + course.inscricao_id}>
              <img className={classes.image} />
            </Link>
            <GridListTileBar
              className={classes.tileBar}
              title={
                <Link
                  to={"/learn/" + course.inscricao_id}
                  className={classes.tileTitle}
                >
                  {course.Curso.curso_name}
                </Link>
              }
              actionIcon={
                <div className={classes.action}>
                  {totalCompleted(eval(course.aula_status)) ? (
                    <CompletedIcon color="secondary" />
                  ) : (
                    <InProgressIcon className={classes.progress} />
                  )}
                </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
