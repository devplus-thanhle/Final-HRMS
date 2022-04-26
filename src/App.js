import "./App.css";
import { Routes } from "react-router-dom";
import { listRoute } from "./utils/routes";
import { routes } from "./routes/index";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert />
      <Routes>{listRoute(routes)}</Routes>
    </>
  );
}

export default App;
