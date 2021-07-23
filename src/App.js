import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/404Page";
import store from "./redux/store";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
