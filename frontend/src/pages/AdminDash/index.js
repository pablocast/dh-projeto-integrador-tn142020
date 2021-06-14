import "./style.css";
import React, { useState, useEffect, forwardRef } from "react";
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
import AdminLogin from "../AdminLogin"
import { AppBar, Layout, UserMenu, MenuItemLink } from 'react-admin'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom'

const MyUserMenu = (props) => {
  return (
    <UserMenu >
      <MenuItemLink
        to={"/"}
        primaryText="Sair"
        leftIcon={<ExitToAppIcon />}
      />
    </UserMenu>
  )
}

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;


const Dashboard = () => {
  return (
    <Card>
      <Title title="Painel Administrador" />
      <CardContent style={{ justifyContent: "left" }}>
        Lorem ipsum sic dolor amet...
      </CardContent>
    </Card>
  );
};

const dataProvider = simpleRestProvider("http://localhost:3000/api");

const AdminDash = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} logoutButton={AdminLogin} layout={MyLayout} >
      <Resource
        name="users"
        list={ListGuesser}
        edit={UserEdit}
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
        icon={CompanyIcon}
      />
    </Admin>
  );
};

export default AdminDash;
