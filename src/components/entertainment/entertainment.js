import React from "react";
import MultiCard from "../components/MultiCard";

const entertainmentCards = [
  {
    title: "Top 10 Movies of 2023",
    description:
      "A review of the top-grossing films of the year and what made them resonate with global audiences.",
    logo: "/assets/entertainmentLogo.jpg",
    name: "Entertainment",
  },
  {
    title: "The Golden Age of Television",
    description:
      "Explore the television shows that defined modern storytelling and their cultural impact.",
    logo: "/assets/entertainmentLogo2.jpg",
    name: "Entertainment",
  },
];

const Entertainment = () => <MultiCard subcards={entertainmentCards} />;

export default Entertainment;
