import "./App.css";
import Cards from "./Cards";
import Details from "./Details";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
