import React from "react";
import {
  Create,
  Edit,
  UrlField,
  SimpleForm,
  TextInput,
} from "react-admin";

import { GiFactory } from 'react-icons/gi'

const CompanyIcon = GiFactory;

const CompanyEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <UrlField source="website" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
};

const CompanyCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <UrlField source="website" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};

export { CompanyEdit, CompanyCreate, CompanyIcon };
