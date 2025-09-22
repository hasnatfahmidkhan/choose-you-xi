import React from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";
const PlayerCard = ({ player }) => {

  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm p-5 rounded-xl">
      <figure>
        <img
          className="h-[300px] w-full object-cover rounded-xl"
          src={player.player_img}
          alt="Shoes"
        />
      </figure>
      <div className="pt-4">
        <div className="flex items-center gap-3">
          <img loading="lazy" className="w-6 h-6 object-cover" src={userImg} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-300">
          <div className="flex items-center gap-3 ">
            <img className="w-5 h-5 object-cover" src={flagImg} alt="" />
            <h2 className="text-gray-500 text-sm">{player.player_country}</h2>
          </div>
          <button disabled={true} className="btn font-normal text-gray-700">
            {player.playing_role}
          </button>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex justify-between items-center ">
            <h2 className="font-semibold">Rating</h2>
            <span>{player.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{player.batting_style}</h3>
            <h3 className="text-gray-400">{player.bowling_style}</h3>
          </div>
          <div className="flex items-center justify-between">
            <h2>Price: <span>{player.price}</span></h2>
            <button className="btn w-fit font-normal">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
