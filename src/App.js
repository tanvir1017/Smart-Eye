import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Authentication/Login/Login";
import PrivateRoute from "./Components/Pages/Authentication/Private/PrivateRoute";
import Registation from "./Components/Pages/Authentication/Registation/Registation";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home/Home";
import Purchase from "./Components/Pages/Purchase/purchase/Purchase";
import AllProducts from "./Components/Pages/Shop/AllProducts/AllProducts";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <AllProducts />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
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
