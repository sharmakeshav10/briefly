import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
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
