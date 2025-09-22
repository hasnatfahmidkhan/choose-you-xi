import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  handlePurchasePlayer,
  purchasePlayers,
}) => {
  const players = use(playersPromise);
  return (
    <div className=" my-8">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            purchasePlayers={purchasePlayers}
            handlePurchasePlayer={handlePurchasePlayer}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
