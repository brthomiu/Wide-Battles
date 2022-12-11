import { React, useState } from "react";
import ActiveBattle from "./ActiveBattle";

const LiveBattles = () => {
  const [activeBattles, setActiveBattles] = useState([
    {
      battleName: "Big Boy Battle",
      sample: "Listen",
      time: "12:25",
      entries: "10",
    },
    {
      battleName: "Tiny Battle",
      sample: "Listen",
      time: "29:40",
      entries: "15",
    },
  ]);

  console.log(activeBattles.sampleBattles);

  if (activeBattles.length === 1) {
    return (
      <section id="liveBattles">
        <div className="liveBattles">
          <h1>LIVE BATTLES</h1>
          <h2>There are currently no live battles.</h2>
        </div>
      </section>
    );
  } else {
    return (
      <section id="liveBattles">
        <div className="liveBattles">
          <div className="liveBattles__header">
            <h3>Battle Name</h3>
            <h3>Sample</h3>
            <h3>Time</h3>
            <h3>Entries</h3>
          </div>



          {activeBattles.map((battle) => (
            <ActiveBattle
              key={battle.battleName}
              battleName={battle.battleName}
              sample={battle.sample}
              time={battle.time}
              entries={battle.entries}
            />
          ))}

        </div>
      </section>
    );
  }
};

export default LiveBattles;
