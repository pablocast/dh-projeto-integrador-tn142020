import "./style.css";
import React, { useState, useEffect } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
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
import {
  list
} from "../../components/admin/api-admin.js";

const Dashboard = () => {
  return (
    <Card>
      <Title title="Painel Administrador" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
};

const abortController = new AbortController()
const signal = abortController.signal

const dataProvider = {
  getList: (resource, params) => {
    return list(signal, resource, params).then((response) => {
      return { data: response , total: response.length }
    })
  },
  getOne: (resource, params) => Promise,
  getMany: (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create: (resource, params) => Promise,
  update: (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}

const AdminDash = () => {

  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
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
