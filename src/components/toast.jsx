import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showError = (message) => {
  toast.error(message);
};

function Toast() {
  return <ToastContainer position="top-right" autoClose={3000} theme="dark" />;
}

export default Toast;