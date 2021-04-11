import React from "react";
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  SimpleForm,
  TextInput,
} from "react-admin";

import { AiOutlineUser } from "react-icons/ai";

const UserIcon = AiOutlineUser;

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <UrlField source="website" />
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Edit>
  );
};

const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <UrlField source="website" />
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Create>
  );
};

export { UserEdit, UserCreate, UserIcon };
