import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScreenshotsPage from "../pages/ScreenshotsPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screenshots" element={<ScreenshotsPage />} />
    </Routes>
  );
};

export default Routers;
