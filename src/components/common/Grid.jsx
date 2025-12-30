import React from "react";
import StatCards from "./StatCards";
import ActivityGraph from "./ActivityGraph";
import RecentTransactions from "./RecentTransactions";
function Grid() {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <RecentTransactions />
    </div>
  );
}

export default Grid;
