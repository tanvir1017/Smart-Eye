import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ContactLances from "../KindOfGlases/ContactLances/ContactLances";
import EyeGlases from "../KindOfGlases/EyeGlases/EyeGlases";
import FirstFrame from "../KindOfGlases/FirstFrame/FirstFrame";
import LancesSolution from "../KindOfGlases/LancesSolution/LancesSolution";
import SunGlases from "../KindOfGlases/SunGlases/SunGlases";

const Glasses = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="row">
      <div className="col-md-5 col-sm-12 col-lg-5">
        <Link to={`${url}/firsFrame`}>First Frame</Link> <br />
        <Link to={`${url}/eyeglasses`}>Eyeglasses</Link>
        <br />
        <Link to={`${url}/sunglasses`}>Sunglasses</Link>
        <br />
        <Link to={`${url}/contact_lansses`}>Contact Lenses</Link>
        <br />
        <Link to={`${url}/lens_solution`}>Lens Solution</Link>
        <br />
      </div>
      <div className="col-md-7 col-sm-12 col-lg-7">
        <Switch>
          <Route exact path={`${path}/firsFrame`}>
            <FirstFrame />
          </Route>

          <Route path={`${path}/eyeglasses`}>
            <EyeGlases />
          </Route>

          <Route path={`${path}/sunglasses`}>
            <SunGlases />
          </Route>

          <Route path={`${path}/contact_lansses`}>
            <ContactLances />
          </Route>

          <Route path={`${path}/lens_solution`}>
            <LancesSolution />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Glasses;
