import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Hero from "./Components/Hero-Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";
// Fetch player promise from player json
const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [purchasePlayers, setPurchasePlayers] = useState([]);
  const handlePurchasePlayer = (player) => {
    const newPurchasePlayers = [...purchasePlayers, player];
    setPurchasePlayers(newPurchasePlayers);
  };
  return (
    <div className="sora-font w-11/12 2xl:w-10/12 mx-auto">
      <ToastContainer />
      {/* Navbar Section */}
      <Navbar></Navbar>

      {/* Hero Section  */}
      <Hero></Hero>

      {/* Available and Selected players Section */}
      <div className="flex items-center justify-between mt-20">
        <h2 className="text-3xl font-semibold transition-all duration-150">
          {toggle
            ? "Available"
            : `Selected Player (${purchasePlayers.length}/6)`}
        </h2>
        <div className="shadow-sm rounded-xl">
          <button
            onClick={() => setToggle(true)}
            className={`rounded-r-none rounded-l-xl cursor-pointer px-5 py-3 border-r-0 transition duration-100 ${
              toggle ? " font-semibold bg-[#E7FE29]" : "text-gray-500"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`rounded-l-none rounded-r-xl cursor-pointer px-5 py-3 border-l-0 transition duration-100 ${
              !toggle
                ? "font-semibold bg-[#E7FE29] text-black"
                : "text-gray-500"
            }`}
          >
            Selected <span>({purchasePlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense fallback={<Loader />}>
          <AvailablePlayers
            handlePurchasePlayer={handlePurchasePlayer}
            playersPromise={playersPromise}
            purchasePlayers={purchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasePlayers={purchasePlayers}></SelectedPlayers>
      )}
    </div>
  );
}

export default App;
