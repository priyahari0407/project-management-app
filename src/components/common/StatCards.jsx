import React from "react";
import PropTypes from "prop-types";
export default function StatCards() {
  const statCardsData = [
    {
      id: 1,
      title: "Gross Revenue",
      value: "$12,345",
      pillText: "Last 30 days",
      trend: "up",
      period: "Last 30 days",
    },
    {
      id: 2,
      title: "Net Revenue",
      value: "$8,765",
      pillText: "Last 30 days",
      trend: "down",
      period: "Last 30 days",
    },
    {
      id: 3,
      title: "Total Projects",
      value: "120",
      pillText: "Last 30 days",
      trend: "up",
      period: "Last 30 days",
    },
  ];

  return (
    <>
      {statCardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
}

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-4 bg-black col-span-4 rounded-lg shadow-md">
      <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>
      <p className="text-white text-2xl font-bold mb-3">{value}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-xs">{period}</span>
        <span
          className={`text-xs px-2 py-1 rounded ${
            trend === "up" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {trend === "up" ? "↑" : "↓"} {pillText}
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pillText: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(["up", "down"]).isRequired,
  period: PropTypes.string.isRequired,
};
