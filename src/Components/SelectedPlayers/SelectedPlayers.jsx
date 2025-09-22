import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayers, handleDeletePlayer }) => {
  return (
    <div className="my-10 space-y-5">
      {purchasePlayers.length !== 0 ? (
        purchasePlayers.map((purchasePlayer) => (
          <SelectedPlayerCard
            handleDeletePlayer={handleDeletePlayer}
            key={purchasePlayer.id}
            purchasePlayer={purchasePlayer}
          ></SelectedPlayerCard>
        ))
      ) : (
        <div className="h-[300px] flex flex-col gap-4 items-center justify-center">
          <span className="text-7xl">👤</span>

          <p className="text-gray-500 text-center xl:text-3xl">
            No players selected yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;
