import React from "react";

import Content from "./component/Content.js";
import Header from "./component/Header.js";
import MainBanner from "./component/MainBanner.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div id="wrap">
      <Header />
      <MainBanner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
