import { Outlet } from "react-router-dom";
import DeputesProvider from "./contexts/DeputeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <DeputesProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DeputesProvider>
  );
}

export default App;
