import { useEffect, useState } from "react";
import Login from "./Login";
import "./layout.css";

function App() {
  const [auth, setAuth] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/auth").then(res => {
      if (res.ok) setAuth(true);
      setChecked(true);
    });
  }, []);

  if (!checked) return null;

  return (
    <div className="App">
      {!auth && <Login />}
    </div>
  );
}

export default App;