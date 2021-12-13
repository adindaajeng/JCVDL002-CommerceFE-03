import "./App.css";
import "./Supports/Stylesheets/main.css";
import "./Supports/Stylesheets/util.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../src/Supports/Assets/vendor/bootstrap/css/bootstrap.min.css";

// Import pages
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Verification from "./Pages/Verification/Verification";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Verification} path="/verification/:token" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
