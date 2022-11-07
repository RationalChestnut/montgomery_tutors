import { Benefits } from "./pages/BenefitsPage/Benefits.page";
import Navbar from "./components/Navbar/Navbar.components";
import { Home } from "./pages/HomePage/Home.page";
import { Team } from "./pages/TeamPage/TeamPage.page";
import { Enroll } from "./pages/Enroll/Enroll.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Benefits />
      <Team />
      <Enroll />
    </div>
  );
}

export default App;
