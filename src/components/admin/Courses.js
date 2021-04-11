import React from "react";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

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
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="course" />
        <TextInput source="duration" />
        <TextInput source="skills" />
        <TextInput source="description" />
        <TextInput source="created" />
      </SimpleForm>
    </Create>
  );
};

export { CourseEdit, CourseCreate, CourseIcon };
