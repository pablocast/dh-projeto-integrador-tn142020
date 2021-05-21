import "./style.css";
import React, { useState, useEffect } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import courses from "../../helpers/courses.json";
import companies from "../../helpers/companies.json";
import users from "../../helpers/users.json";
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
import { userList, companyList } from "../../components/admin/api-admin.js";

const Dashboard = () => {
  return (
    <Card>
      <Title title="Painel Administrador" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
};

const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    userList(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    companyList(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setCompanies(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const dataProvider = fakeDataProvider({
    courses: courses,
    companies: companies,
    users: users,
  });

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
