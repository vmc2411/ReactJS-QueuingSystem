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
import ServicePage from "./components/views/ServicePage";
import ServiceDetailPage from "./components/views/ServiceDetailPage";
import SettingPage from "./components/views/SettingPage";
import AddRolePage from "./components/views/AddRolePage";
import ManageUserPage from "./components/views/ManageUserPage";
import AddUserPage from "./components/views/AddUserPage";
import HistoryUserPage from "./components/views/HistoryUserPage";
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
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/detail" element={<ServiceDetailPage />} />
          <Route path="/manage-role" element={<SettingPage />} />
          <Route path="/add/manage-role" element={<AddRolePage />} />
          <Route path="/manage-user" element={<ManageUserPage />} />
          <Route path="/add/manage-user" element={<AddUserPage />} />
          <Route path="/history" element={<HistoryUserPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;