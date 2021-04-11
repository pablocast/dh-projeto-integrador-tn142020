import "./style.css";
import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import fakeDataProvider from 'ra-data-fakerest';
import courses from '../../helpers/courses.json';
import companies from '../../helpers/companies.json';
import users from '../../helpers/users.json';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import {UserEdit,UserCreate, UserIcon } from '../../components/admin/Users'
import {CourseEdit,CourseCreate, CourseIcon } from '../../components/admin/Courses'
import {CompanyEdit,CompanyCreate, CompanyIcon } from '../../components/admin/Companies'

const Dashboard = () => {
  return (
    <Card>
      <Title title="Painel Administrador" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
}

const dataProvider = fakeDataProvider({
  courses: courses,
  companies: companies,
  users: users
})

const AdminDash = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      <Resource name="courses" list={ListGuesser} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
      <Resource name="companies" list={ListGuesser} edit={CompanyEdit} create={CompanyCreate} icon={CompanyIcon} />
    </Admin>
  );
};

export default AdminDash;
