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

import { AdminLogin, AdminHome, Categoria } from "./views/Admin/index.js";

import { Navbar, Footer } from "./components/index";

function App() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  let location = useLocation().pathname;

  return (
    <div>
      {location !== "/admin/login/" &&
        location !== "/admin/home/" &&
        location !== "/admin/complaints/assedio-moral/" &&
        location !== "/admin/complaints/assedio-sexual/" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
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
        />
        <Route
          path="/fraudes"
          element={<Fraudes />}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
        />
        <Route
          path="/saude-meio-ambiente"
          element={<Saude />}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
        />
        <Route
          path="/add-complaint/:category"
          element={
            <AddForm
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
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
            />
          }
        />
        <Route
          path="/admin/login"
          element={
            <AdminLogin
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
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
            />
          }
        />
        <Route
          path="/admin/complaints/:categoria/"
          element={
            <Categoria
              message={message}
              setMessage={setMessage}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>

      {location !== "/admin/login" &&
        location !== "/admin/signup" &&
        location !== "/admin/home" &&
        location !== "/admin/complaints/assedio-moral" && <Footer />}
    </div>
  );
}

export default App;
