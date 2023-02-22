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

function App() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  let location = useLocation().pathname;
  let newLocation = location.slice(0, 7);

  return (
    <div>
      {newLocation !== "/admin/" && <Navbar />}
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
        {/* ADMIN ROUTES */}
        <Route
          path="/admin/login"
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
          path="/admin/home"
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
          path="/admin/manifestacoes/"
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
          path="/admin/denuncias"
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
          path="/admin/denuncia/:id"
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
      </Routes>
      {newLocation !== "/admin/" && <Footer />}
    </div>
  );
}

export default App;
