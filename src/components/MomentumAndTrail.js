import { useState } from "react";

const SimpleMomentum = () => {
  const [opacity, setOpacity] = useState(50);

  const handleOpacity = () => {
    setOpacity(100);
  };

  return (
    <div className={`mt-5 opacity-${opacity}`}>
      <input
        onClick={handleOpacity} 
        type="checkbox"
        name="simple momentum"
        value="simple momentum"
        className="mr-2"
      />
      <label for="simple momentum"> Simple Momentum</label>
      <div className="flex flex-row items-center mt-3 space-x-3">
        <select
          id="points"
          className="p-1 w-[100px] h-[30px] bg-blue border border-gray-300 text-white text-[16px] font-[400] rounded-full focus:ring-blue-500 focus:border-blue-500 block"
        >
          <option value="PointsUp">Points ↑</option>
          <option value="PointsDown">Points ↓</option>
          <option value="PercentageUp">Percentage ↑</option>
          <option value="PercentageDown">Percentage ↓</option>
          <option value="UnderlyingPoints">Underlying Points ↑</option>
          <option value="UnderlyingPoints">Underlying Points ↓</option>
          <option value="UnderlyingPoints">Underlying Percentage ↑</option>
          <option value="UnderlyingPoints">Underlying Percentage ↓</option>
        </select>
        <input
          min="1"
          className="p-2 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-sm rounded-full"
          placeholder="1"
        />
      </div>
    </div>
  );
};

const Trail = () => {
  return (
    <div className="mt-5">
      <input type="checkbox" name="trail" value="trail" className="mr-2" />
      <label for="trail">Trail SL</label>
      <div className="flex flex-row items-center mt-3 space-x-3">
        <select
          id="points"
          className="p-1 w-[100px] h-[30px] bg-blue border border-gray-300 text-white text-[16px] font-[400] rounded-full focus:ring-blue-500 focus:border-blue-500 block"
        >
          <option value="PointsUp">Points</option>
          <option value="PointsDown">Percentage</option>
        </select>
        <input
          min="1"
          className="p-2 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-sm rounded-full"
          placeholder="1"
        />
        <input
          min="1"
          className="p-2 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-sm rounded-full"
          placeholder="1"
        />
      </div>
    </div>
  );
};

const MomentumAndTrail = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      <SimpleMomentum />
      <Trail />
    </div>
  );
};

export default MomentumAndTrail;
