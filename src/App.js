import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "./components/index.js";
import {
  HomePage,
  Complaints,
  SendComplaint,
  TrackComplaint,
  Relationship,
  MoralHarassment,
} from "./views/index.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/moral_harassment" element={<MoralHarassment />} />
        <Route path="/send-complaint" element={<SendComplaint />} />
        <Route path="/track-complaint" element={<TrackComplaint />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
