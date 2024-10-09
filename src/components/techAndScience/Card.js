import React, { useState } from "react";
import "./Card.css";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5"; 
  const Card = ({ title, description, logo, name, initialFav = false }) => {
  const [isFav, setIsFav] = useState(initialFav);
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleFavorite = () => {
    setIsFav(!isFav);
  };

  const descriptionWords = description.split(" ");
  const truncatedDescription =
    descriptionWords.length > 10
      ? descriptionWords.slice(0, 10).join(" ") + "..."
      : description;

  return (
    <div className="cardSection">
      <div className="image">
        <img src="/assets/images2.jpeg" alt={title} className="card-image" />
      </div>

      <div className="content">
        <div className="header">{title}</div>
        <div className="para">
          {isReadMore ? description : truncatedDescription}
          {descriptionWords.length > 10 && (
            <span
              onClick={() => setIsReadMore(!isReadMore)}
              className="read-more"
              style={{ cursor: "pointer", color: "blue" }}
            >
              {isReadMore ? " Read Less" : " Read More"}
            </span>
          )}
        </div>        
        <div className="bottom">
          <div className="profile">
          <div className="profImage">
            <img src={logo} alt="error 404" className="footer-logo" />
          </div>
          <div className="name">{name}</div>
          </div>

          <div
            className="favIcon"
            onClick={toggleFavorite}
            style={{ cursor: "pointer" }}
          >
            {isFav ? (
              <IoBookmark className="favorite-icon active" />
            ) : (
              <IoBookmarkOutline className="favorite-icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
