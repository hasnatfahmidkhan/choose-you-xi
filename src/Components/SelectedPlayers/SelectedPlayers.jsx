import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayers }) => {
  return (
    <div className="h-[500px]">
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
