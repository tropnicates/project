import React from "react";
import MultiCard from "../components/MultiCard";

const financeCards = [
  {
    title: "The Future of Cryptocurrency",
    description:
      "An in-depth look at where the crypto market is headed and what investors need to know.",
    logo: "/assets/financeLogo.jpg",
    name: "Finance",
  },
  {
    title: "Stock Market Trends 2023",
    description:
      "What the 2023 stock market tells us about future financial opportunities and risks.",
    logo: "/assets/financeLogo2.jpg",
    name: "Finance",
  },
];

const Finance = () => <MultiCard subcards={financeCards} />;

export default Finance;
