import AsyncRoute from "preact-async-route";
import Router, { Route } from "preact-router";

function Home() {
  return <h1>Hello</h1>
}

function About() {
  return <h1>About</h1>
}

function Lazy() {
  return <h1>Lazy</h1>
}

export function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <AsyncRoute path="/lazy" component={Lazy} />
    </Router>
  )
}
