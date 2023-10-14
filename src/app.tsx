import Router, { Route } from "preact-router";
import About from "./Components/about/about";
import Dashboard from "./Components/dashboard/dashboard";
import Team from "./Components/team/team";
import Itrix from "./Components/itrix/itrix";
import Iplus from "./Components/iplus/iplus";
import Placement from "./Components/placement/placement";
import Events from "./Components/events/events";
import NavBar from "./Components/utilities/navbar.tsx";

export function App() {
  return (
      <>
        <NavBar />
        <Router>
          <Route path={`${import.meta.env.BASE_URL}`} component={Dashboard} />
          <Route path={`${import.meta.env.BASE_URL}/about`} component={About} />
          <Route path={`${import.meta.env.BASE_URL}/team`} component={Team} />
          <Route path={`${import.meta.env.BASE_URL}/itrix`} component={Itrix} />
          <Route path={`${import.meta.env.BASE_URL}/iplus`} component={Iplus} />
          <Route path={`${import.meta.env.BASE_URL}/placement`} component={Placement} />
          <Route path={`${import.meta.env.BASE_URL}/events`} component={Events} />
        </Router>
       </>
  );
}
