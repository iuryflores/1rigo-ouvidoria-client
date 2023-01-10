import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./views/HomePage.js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Complaints } from "./views/Complaints.js";
import { SendComplaint } from "./views/SendComplaint.js";
import { TrackComplaint } from "./views/TrackComplaint.js";
import { Relationship } from "./views/Relationship";
import { MoralHarassment } from "./views/MoralHarassment";

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
