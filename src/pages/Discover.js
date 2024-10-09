import React from "react";
import Card from "../components/techAndScience/Card";
import MultiCard from "../components/techAndScience/MultiCard";
import "./Discover.css";

const Discover = () => {
  const firstCardData = {
    title: "Quantum Computing Revolution",
    description:
      "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation.",
    image: "path-to-image.jpg",
    logo: "../assets/images2.jpeg",
    name: "Tech Insights",
    isFav: false,
  };

  const secondCardData = [
    {
      title: "AI in Medicine",
      description:
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation.",
      image: "path-to-image.jpg",
      logo: "../assets/images2.jpeg",
      name: "Health AI",
      isFav: true,
    },
    {
      title: "AI in Medicine",
      description:
      "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation.",      image: "path-to-image.jpg",
      logo: "../assets/images2.jpeg",
      name: "Health AI",
      isFav: true,
    },
    {
      title: "AI in Medicine",
      description:
      "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation.",      image: "path-to-image.jpg",
      logo: "../assets/images2.jpeg",
      name: "Health AI",
      isFav: true,
    },
  ];

  return (
    <div className="discover">
      <Card
        title={firstCardData.title}
        description={firstCardData.description}
        image={firstCardData.image}
        logo={firstCardData.logo}
        name={firstCardData.name}
        isFav={firstCardData.isFav}
      />

      <MultiCard subcards={secondCardData} />

      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />
      <Card
        title="AI vs Human Creativity"
        description=
        "The Quantum Computing Revolution is transforming the future of technology, promising to solve complex problems that are beyond the reach of classical computers. Unlike traditional computers that use bits to represent data as 0s or 1s, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This enables quantum machines to process massive amounts of information at once, dramatically increasing computing power for specific tasks. Industries like cryptography, drug discovery, artificial intelligence, and materials science are poised to benefit, with quantum computing offering the potential to unlock new scientific breakthroughs, optimize intricate processes, and revolutionize secure communications. As quantum computing matures, it is expected to reshape industries and redefine what is computationally possible, marking a significant leap in human innovation."
        image="path-to-new-image.jpg"
        logo= "../assets/images2.jpeg"
        name="AI News"
        isFav={false}
      />
        
        <MultiCard subcards={secondCardData} />

    </div>
  );
};

export default Discover;
