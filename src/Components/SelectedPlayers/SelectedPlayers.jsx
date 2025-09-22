import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayers }) => {
  return (
    <div className="my-10 space-y-5">
      {purchasePlayers.map((purchasePlayer) => (
        <SelectedPlayerCard
          key={purchasePlayer.id}
          purchasePlayer={purchasePlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
