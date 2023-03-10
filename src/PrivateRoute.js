import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
  let session = sessionStorage.getItem("entidade");

  let location = useLocation().pathname;

  const userAuth = () => {
    const newLocation = location.split("/");
    const validation = newLocation.includes(session);

    return validation;
  };
  const isAuth = userAuth();
  console.log(isAuth);
  return (
    <>
      {isAuth ? (
        <Outlet />
      ) : (
        <Navigate
          to={
            session === "denuncias"
              ? "/admin/denuncias/login"
              : "/admin/ouvidoria/login"
          }
        />
      )}
    </>
  );
};
