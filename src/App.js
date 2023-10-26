import React from "react";

import Content from "./component/Content.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
