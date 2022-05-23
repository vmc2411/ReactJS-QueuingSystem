import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import HomePage from "./components/views/HomePage";
import DashboardPage from "./components/views/DashboardPage";
import DevicePage from "./components/views/DevicePage";
import ManageDevicePage from "./components/views/ManageDevicePage";
import DeviceDetailPage from "./components/views/DeviceDetailPage";
import NumberPage from "./components/views/NumberPage";
function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/device" element={<DevicePage />} />
          <Route path="/device/manage" element={<ManageDevicePage />} />
          <Route path="/device/detail" element={<DeviceDetailPage />} />
          <Route path="/number" element={<NumberPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;