import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen p-5">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

export default App;
