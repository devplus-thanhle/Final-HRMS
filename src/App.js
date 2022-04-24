import "./App.css";
import { Routes } from "react-router-dom";
import { listRoute } from "./utils/routes";
import { routes } from "./routes/index";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Alert />
      <Loading />
      <Routes>{listRoute(routes)}</Routes>
    </>
  );
}

export default App;
