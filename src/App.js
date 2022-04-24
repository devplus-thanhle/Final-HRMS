import "./App.css";
import { Routes } from "react-router-dom";
import { listRoute } from "./utils/routes";
import { routes } from "./routes/index";

function App() {
  return <Routes>{listRoute(routes)}</Routes>;
}

export default App;
