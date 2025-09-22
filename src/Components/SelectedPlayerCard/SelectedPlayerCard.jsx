import deleteImg from "../../assets/delete.png";
const SelectedPlayerCard = ({ purchasePlayer }) => {
  console.log(purchasePlayer);
  return (
    <div className="flex justify-between items-center p-4 border border-gray-100 shadow-sm rounded-xl">
      <div className="flex items-center gap-5">
        <div className="p-2 bg-gray-400 rounded-xl">
          <img
            className="w-12 h-12 rounded-xl object-cover object-center"
            src={purchasePlayer.player_img}
            alt=""
          />
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold text-xl">{purchasePlayer.player_name}</h2>
          <h2 className="text-sm text-gray-500">{purchasePlayer.playing_role}</h2>
        </div>
      </div>
      <div className="cursor-pointer active:scale-95">
        <img src={deleteImg} alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
