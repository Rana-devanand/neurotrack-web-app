import { useEffect } from "react";
import Routers from "./Routes/index";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
