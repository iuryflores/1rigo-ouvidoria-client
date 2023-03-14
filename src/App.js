import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  HomePage,
  Complaints,
  SendComplaint,
  TrackComplaint,
  TrackingComplaint,
  Relationship,
  Fraudes,
  Saude,
  AddForm,
} from "./views/index";

import { Ouvidoria } from "./views/ouvidoria/index.js";
import { OuvidoriaForm } from "./views/ouvidoria/OuvidoriaForm.js";
import loadingGif from "./imgs/loading-state.gif";
import {
  AdminLogin,
  AdminHome,
  Categoria,
  Denuncia,
  Manifestacoes,
  AllDenuncias,
  DenunciaByStatus,
} from "./views/Admin/index.js";

import { Navbar, Footer } from "./components/index";
import { Tipos } from "./views/ouvidoria/Tipos";
import { Signup } from "./views/Admin/Signup";
import { Users } from "./views/Admin/Users";
import { OuvidoriaLogin } from "./views/ouvidoria/Login";
import { SignupOuvidoria } from "./views/ouvidoria/Signup";
import { OuvidoriaHome } from "./views/ouvidoria/Home";
import { PrivateRoute } from "./PrivateRoute";
import { ManifestacoesByStatus } from "./views/ouvidoria/ManifestacoesByStatus";
import { Manifestacao } from "./views/ouvidoria/Manifestacao";
import { Ouvidorias } from "./views/ouvidoria/Ouvidorias";
import { CategoriasOuvidorias } from "./views/ouvidoria/CategoriasOuvidoria";
import { UsersOuvidoria } from "./views/ouvidoria/UsersOuvidoria";

function App() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  let location = useLocation().pathname;
  let newLocation = location.slice(0, 7);
  let newLocationOuvidoria = location.slice(0, 11);

  return (
    <div>
      {newLocation !== "/admin/" && newLocationOuvidoria !== "/ouvidoria/" && (
        <Navbar />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route path="*" element={<p>Nao encontrado</p>} />
        <Route
          path="/complaints"
          element={
            <Complaints
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/relationship"
          element={<Relationship />}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          loadingGif={loadingGif}
        />
        <Route
          path="/fraudes"
          element={<Fraudes />}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          loadingGif={loadingGif}
        />
        <Route
          path="/saude-meio-ambiente"
          element={<Saude />}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          loadingGif={loadingGif}
        />
        <Route
          path="/add-complaint/:category"
          element={
            <AddForm
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/send-complaint"
          element={
            <SendComplaint
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/track-complaint"
          element={
            <TrackComplaint
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/track-complaint/:protocolo_id/:pass_protocolo"
          element={
            <TrackingComplaint
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/admin/denuncias/login"
          element={
            <AdminLogin
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/admin/denuncias/signup"
          element={
            <Signup
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/admin/ouvidoria/login"
          element={
            <OuvidoriaLogin
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/admin/ouvidoria/signup"
          element={
            <SignupOuvidoria
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        {/* ADMIN ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/admin/denuncias/users"
            element={
              <Users
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/home"
            element={
              <AdminHome
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/manifestacoes/"
            element={
              <Manifestacoes
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/todas"
            element={
              <AllDenuncias
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/:categoria"
            element={
              <Categoria
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/:id"
            element={
              <Denuncia
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/denuncias/status/:status"
            element={
              <DenunciaByStatus
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          {/* OUVIDORIA */}

          <Route
            path="/admin/ouvidoria/home"
            element={
              <OuvidoriaHome
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/ouvidoria/manifestacoes/"
            element={
              <Ouvidorias
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/ouvidoria/status/:status"
            element={
              <ManifestacoesByStatus
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/ouvidoria/tipo/:categoria/"
            element={
              <CategoriasOuvidorias
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/ouvidoria/:id"
            element={
              <Manifestacao
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
          <Route
            path="/admin/ouvidoria/users/"
            element={
              <UsersOuvidoria
                message={message}
                setMessage={setMessage}
                loading={loading}
                setLoading={setLoading}
                loadingGif={loadingGif}
              />
            }
          />
        </Route>
        <Route
          path="/ouvidoria/home"
          element={
            <Ouvidoria
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/ouvidoria/tipos/:tipo"
          element={
            <OuvidoriaForm
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
        <Route
          path="/ouvidoria/tipos"
          element={
            <Tipos
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
              loadingGif={loadingGif}
            />
          }
        />
      </Routes>
      {newLocation !== "/admin/" && newLocationOuvidoria !== "/ouvidoria/" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
