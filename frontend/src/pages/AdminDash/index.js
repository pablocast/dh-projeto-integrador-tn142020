import "./style.css";
import React, { useState, useEffect } from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import { UserEdit, UserCreate, UserIcon } from "../../components/admin/Users";
import {
  CourseEdit,
  CourseCreate,
  CourseIcon,
} from "../../components/admin/Courses";
import {
  CompanyEdit,
  CompanyCreate,
  CompanyIcon,
} from "../../components/admin/Companies";
import simpleRestProvider from "ra-data-simple-rest";

const Dashboard = () => {
  return (
    <Card>
      <Title title="Painel Administrador"  />
      <CardContent style={{ justifyContent: "left" }}>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
};

const dataProvider = simpleRestProvider("http://localhost:3000/api");

const AdminDash = () => {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
    >
      <Resource
        name="users"
        list={ListGuesser}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
      <Resource
        name="courses"
        list={ListGuesser}
        edit={CourseEdit}
        create={CourseCreate}
        icon={CourseIcon}
      />
      <Resource
        name="companies"
        list={ListGuesser}
        edit={CompanyEdit}
        create={CompanyCreate}
        icon={CompanyIcon}
      />
    </Admin>
  );
};

export default AdminDash;
