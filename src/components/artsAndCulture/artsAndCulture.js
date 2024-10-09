import React from "react";
import MultiCard from "../components/MultiCard";

const artsAndCultureCards = [
  {
    title: "Masterpieces of the Renaissance",
    description:
      "Explore the most iconic art pieces from the Renaissance period, a revolution in artistic expression.",
    logo: "/assets/artsLogo.jpg",
    name: "Art & Culture",
  },
  {
    title: "Impressionism: A New Dawn",
    description:
      "Learn how impressionist artists transformed the art scene by capturing moments and impressions.",
    logo: "/assets/artsLogo2.jpg",
    name: "Art & Culture",
  },
];

const ArtsAndCulture = () => <MultiCard subcards={artsAndCultureCards} />;

export default ArtsAndCulture;
