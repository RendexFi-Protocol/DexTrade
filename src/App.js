import { useEffect, useState } from "react";


import TopButtons from "./components/chrome/TopButtons";
import BottomNav from "./components/chrome/BottomNav";

import './layout.css';

function App() {
  return (
    <div className="App">
      <TopButtons />
      <BottomNav />
    </div>
  );
}

export default App;
