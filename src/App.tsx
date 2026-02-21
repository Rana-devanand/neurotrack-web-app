import Routers from "./Routes/index";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      {/* No top padding here — each page manages its own paddingTop */}
      <Routers />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
