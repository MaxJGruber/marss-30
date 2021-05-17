import Home from "./Pages/Home.jsx";
import store from "./redux/store";
import { useState, useEffect } from "react";
import changeLanguage from "./redux/languageContent.js";

function App() {
  // eslint-disable-next-line
  const [content, setContent] = useState(null);
  useEffect(() => {
    store.subscribe(() => {
      store.getState();
      setContent(changeLanguage());
    }, []);
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
