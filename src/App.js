import { Benefits } from "./pages/BenefitsPage/Benefits.page";
import Navbar from "./components/Navbar/Navbar.components";
import { Home } from "./pages/HomePage/Home.page";
import { Team } from "./pages/TeamPage/TeamPage.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Benefits />
      <Team />
    </div>
  );
}

export default App;
