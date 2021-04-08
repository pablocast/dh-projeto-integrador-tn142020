import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import "./style.css";
import users from "../../helpers/users.json";

const dataProvider = users;

const AdminDash = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
      <Resource name="companies" list={ListGuesser} />
      <Resource name="courses" list={ListGuesser} />
    </Admin>
  );
};

export default AdminDash;
