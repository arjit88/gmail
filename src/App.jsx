import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <NavBar />
      <Sidebar />
    </div>
  );
}

export default App;
