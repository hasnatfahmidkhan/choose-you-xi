import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Hero from "./Components/Hero-Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";

// Fetch player promise from player json
const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  return (
    <div className="sora-font">
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<Loader />}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </div>
  );
}

export default App;
