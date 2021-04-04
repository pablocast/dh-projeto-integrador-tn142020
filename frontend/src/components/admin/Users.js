import React from "react";
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  DisabledInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" label="Address" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" label="Company" />
      </Datagrid>
    </List>
  );
};

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
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
        <DisabledInput source="id" />
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

export { UserList, UserEdit, UserCreate };
