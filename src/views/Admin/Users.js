import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useNavigate } from "react-router-dom";
import { NavbarAdmin, FooterAdmin } from "../../components/index.js";

import loadingGif from "../../imgs/loading-state.gif";

import "../css/AdminHome.css";

export const Users = ({ loading, setLoading, message, setMessage }) => {
  const [users, setUsers] = useState();

  let userId = sessionStorage.getItem("userId");

  const navigate = useNavigate();

  console.log(userId);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await api.getUsers();
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get users");
      }
    };
    getUsers();
    const getUserLogged = async () => {
      let userId = sessionStorage.getItem("userId");
      try {
        const data = await api.getUserLogged(userId);
        return data;
      } catch (error) {
        console.log(error, "Não foi possível encontrar o usuário logado.");
      }
    };
    getUserLogged();
  }, [loading, setLoading, userId]);

  const goToUser = (userId) => {
    navigate(`/admin/user/${userId}/`);
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <div className="mx-3">
          <h4>
            <i className="bi bi-people-fill"></i> Usuários
          </h4>
        </div>
        <hr />
      </div>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>

              <th scope="col">Nome completo</th>
              <th scope="col" className="no-mobile">
                CPF
              </th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              users?.map((user, index) => {
                let iconActive;
                if (user.status === true) {
                  iconActive = "green";
                } else {
                  iconActive = "red";
                }

                return (
                  <tr
                    key={index}
                    className="clickable"
                    onClick={() => goToUser(user._id)}
                  >
                    <th scope="row" style={{ color: iconActive }}>
                      <i className="bi bi-circle-fill"></i>
                    </th>
                    <td>
                      {user.full_name}
                      {user.admin === true ? " (Administrador)" : ""}
                    </td>
                    <td>{user.cpf}</td>
                    <td className="no-mobile">{user.email}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  <img
                    style={{ width: "100px" }}
                    src={loadingGif}
                    alt="Loading gif"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <FooterAdmin />
    </div>
  );
};
