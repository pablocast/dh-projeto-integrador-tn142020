import React, { useState } from "react";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import { create } from "../core/api-course";

import { BiBookReader } from "react-icons/bi";

const CourseIcon = BiBookReader;

const CourseEdit = (props) => {
  return (
    <Edit {...props}>
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

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

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
      }
    });
  };

  return (
    <Create {...props}>
      <SimpleForm save={clickSubmit}>
        <TextInput source="Course Name" onChange={handleChange("curso_name")} />
        <TextInput
          source="Course Description"
          onChange={handleChange("curso_description")}
        />
        <TextInput
          source="Course Image"
          onChange={handleChange("curso_image")}
        />
        <TextInput
          source="Course Duration"
          onChange={handleChange("curso_duration")}
        />
        <TextInput
          source="Course Language"
          onChange={handleChange("curso_language")}
        />
        <TextInput
          source="Course Skills"
          onChange={handleChange("curso_skills")}
        />
      </SimpleForm>
    </Create>
  );
};

export { CourseEdit, CourseCreate, CourseIcon };
