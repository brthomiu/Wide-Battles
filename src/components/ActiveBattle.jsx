import React from "react";

const ActiveBattle = (props) => {
  return (
    <div className="activeBattle">
      <h2>{props.battleName}</h2>
      <h2>{props.sample}</h2>
      <h2>{props.time}</h2>
      <h2>{props.entries}</h2>

    </div>
  );
};

export default ActiveBattle;
