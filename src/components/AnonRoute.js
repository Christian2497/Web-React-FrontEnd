import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const AnonRoute = ({ component: Component, isLoggedin, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Redirect to={`/profile/${user._id}`}/> : <Component {...props} />
      }
    />
  );
};

export default withAuth(AnonRoute);
