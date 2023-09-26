import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
