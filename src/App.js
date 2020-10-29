import './assets/sass/style.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
    </>
  );
}

export default App;
