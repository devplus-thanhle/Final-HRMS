import "./App.css";
import { Switch } from "react-router-dom";
import { listRoute } from "./utils/routes";
import { routes } from "./routes/index";

function App() {
  return <Switch>{listRoute(routes)}</Switch>;
}

export default App;
