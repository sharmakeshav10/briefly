import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-custom-gradient min-h-screen">
      {/* <Hero />
      <Demo /> */}
      <Header />
      <main className="">
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
