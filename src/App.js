import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/English/Home.jsx";
import FooterEN from "./Components/English/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <FooterEN />
    </div>
  );
}

export default App;
