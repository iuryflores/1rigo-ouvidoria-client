import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "./components/index";
import {
  HomePage,
  Complaints,
  SendComplaint,
  TrackComplaint,
  Relationship,
  MoralHarassment,
} from "./views/index";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
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
          path="/moral_harassment"
          element={
            <MoralHarassment
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
