import { Benefits } from "./BenefitsPage/Benefits.page";
import Navbar from "./components/Navbar/Navbar.components";
import { Home } from "./HomePage/Home.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
