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
          <Route path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/itrix" component={Itrix} />
          <Route path="/iplus" component={Iplus} />
          <Route path="/placement" component={Placement} />
          <Route path="/events" component={Events} />
        </Router>
       </>
  );
}
