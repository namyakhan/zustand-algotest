import React from "react";

const SimpleMomentum = () => {
  return (
    <div className="mt-5">
      <input type="checkbox" name="simple momentum" value="simple momentum" />
      <label for="simple momentum"> Simple Momentum</label>
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
    </div>
  );
};

const MomentumAndTrail = () => {
  return (
    <div>
      <SimpleMomentum />
    </div>
  );
};

export default MomentumAndTrail;
