import React, { useState } from "react"; 
import "./MultiCard.css";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const MultiCard = ({ subcards }) => {
  const [favStatus, setFavStatus] = useState(subcards.map(() => false));
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFavorite = (index) => {
    const updatedFavStatus = [...favStatus];
    updatedFavStatus[index] = !updatedFavStatus[index];
    setFavStatus(updatedFavStatus);
  };

  return (
    <div className="multicard-section">
      {subcards.map((subcard, index) => {
        const descriptionWords = subcard.description.split(" ");
        const truncatedDescription =
          descriptionWords.length > 10
            ? descriptionWords.slice(0, 4).join(" ") + "..."
            : subcard.description;

        return (
          <div key={index} className="image">
            <img
              src="/assets/images2.jpeg"
              alt={subcard.title}
              className="subcard-image"
            />

            <div className="content">
              <div className="header">{subcard.title}</div>
              <div className="para">
                {expandedIndex === index ? subcard.description : truncatedDescription}
                {descriptionWords.length > 10 && (
                  <span
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="read-more"
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {expandedIndex === index ? " Read Less" : " Read More"}
                  </span>
                )}
              </div>

              <div className="bottom">
                <div className="profile">
                  <img src={subcard.logo} alt="Logo" className="profImage" />
                  <div className="name">{subcard.name}</div>
                  <div
                    className="favIcon"
                    onClick={() => toggleFavorite(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {favStatus[index] ? (
                      <IoBookmark className="favorite-icon active" />
                    ) : (
                      <IoBookmarkOutline className="favorite-icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultiCard;
