import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page-wrapper">
        <Header />

        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
