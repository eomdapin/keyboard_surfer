import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./component/static/Header.js";
import MainBanner from "./component/mainpage/MainBanner.js";
import SubBanner from "./component/substatic/SubBanner.js";
import Footer from "./component/static/Footer.js";

function App() {
  return (
    <div id="wrap">
      <Header />
        <Router>
          <Routes>
            <Route path="/keyboard_surfer" element={<MainBanner />} />
            <Route path="/keyboard_surfer/:sub_1/:sub_2" element={<SubBanner />} />
            <Route path="/keyboard_surfer/:sub_1/:sub_2/:sub_3" element={<SubBanner />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
