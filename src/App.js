import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Authentication/Login/Login";
import Registation from "./Components/Pages/Authentication/Registation/Registation";
import Home from "./Components/Pages/Home/Home/Home";
import Navigation from "./Components/Pages/Shared/Navigation/Navigation";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/regi">
              <Registation></Registation>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
