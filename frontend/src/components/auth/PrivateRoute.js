import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("isAuthenticated") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin",
            state: { from: props.location },
          }}
        />
      )
    }
  />;
};

export default PrivateRoute;
