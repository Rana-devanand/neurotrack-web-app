import Routers from "./Routes/index";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <ThemeProvider>
      {!isAdminRoute && <Navbar />}
      {/* No top padding here — each page manages its own paddingTop */}
      <Routers />
      {!isAdminRoute && <Footer />}
    </ThemeProvider>
  );
};

export default App;
