import React from "react";
import MultiCard from "../components/MultiCard";

const sportsCards = [
  {
    title: "World Cup 2023: A Glimpse",
    description:
      "Get a preview of the much-awaited World Cup and the top teams to watch this season.",
    logo: "/assets/sportsLogo.jpg",
    name: "Sports",
  },
  {
    title: "Olympics 2024: What’s Next",
    description:
      "As we gear up for the next Olympics, we take a look at the athletes set to make history.",
    logo: "/assets/sportsLogo2.jpg",
    name: "Sports",
  },
];

const Sports = () => <MultiCard subcards={sportsCards} />;

export default Sports;
