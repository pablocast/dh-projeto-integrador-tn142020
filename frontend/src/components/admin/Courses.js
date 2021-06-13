import React, { useState } from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  useNotify,
  useRefresh,
  useRedirect,
} from "react-admin";
import { create } from "../core/api-course";
import { createLessons } from "./api-lesson";
import { BiBookReader } from "react-icons/bi";
import NewLesson from "./NewLesson";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import auth from "../../components/auth/auth-helper";

const CourseIcon = BiBookReader;

const CourseEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Cambios armazenados`);
    redirect(false);
    refresh();
  };

  return (
    <Edit onSuccess={onSuccess} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="course" />
        <TextInput source="duration" />
        <TextInput source="skills" />
        <TextInput source="description" />
        <TextInput source="created" />
      </SimpleForm>
    </Edit>
  );
};

const CourseCreate = (props) => {
  const notify = useNotify();

  const [values, setValues] = useState({
    curso_name: "",
    curso_description: "",
    curso_image: "",
    curso_duration: "",
    curso_language: "",
    curso_skills: "",
    open: false,
    error: "",
  });

  const [lessons, setLessons] = useState([]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const jwt = auth.isAuthenticated();

  const clickSubmit = () => {
    const course = {
      curso_name: values.curso_name || undefined,
      curso_description: values.curso_description || undefined,
      curso_image: values.curso_image || undefined,
      curso_duration: values.curso_duration || undefined,
      curso_language: values.curso_language || undefined,
      curso_skills: values.curso_skills || undefined,
    };

    create(course).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
        createLessons(
          { courseId: data.curso_id },
          { t: jwt.token },
          lessons
        ).then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            notify("Curso armazenado");
          }
        });
      }
    });
  };

  return (
    <Create {...props}>
      <SimpleForm redirect="show" save={clickSubmit}>
        <TextInput
          label="curso name"
          source="Course Name"
          onChange={handleChange("curso_name")}
        />
        <TextInput
          label="curso description"
          source="Course Description"
          onChange={handleChange("curso_description")}
        />
        <TextInput
          label="curso image"
          source="Course Image"
          onChange={handleChange("curso_image")}
        />
        <TextInput
          label="curso duration"
          source="Course Duration"
          onChange={handleChange("curso_duration")}
        />
        <TextInput
          label="curso language"
          source="Course Language"
          onChange={handleChange("curso_language")}
        />
        <TextInput
          label="curso skills"
          source="Course Skills"
          onChange={handleChange("curso_skills")}
        />
        {lessons &&
          lessons.length > 0 &&
          lessons.map((lesson, index) => {
            return (
              <span key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{index + 1}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={lesson.aula_title}
                    secondary={lesson.aula_content}
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  style={{ width: "25%" }}
                />
                <p></p>
              </span>
            );
          })}
        <NewLesson addLesson={setLessons} lesson={lessons} />
      </SimpleForm>
    </Create>
  );
};

export { CourseEdit, CourseCreate, CourseIcon };
