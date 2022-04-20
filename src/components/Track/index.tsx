import React, { useState } from "react";
import PropTypes from 'prop-types';
const Track = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
   
  };
  

    return (
      <div className="displaysong">
      <div className="image-card">
        <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover rounded h-40 w-full"/>
        <div className="infosong">
        <p>{props.track_title}</p>
          <p>{props.artist_name}</p>
          <button
              className={`btn btn-select ${
                isSelected ? "btn-primary" : "btn-secondary"
              }`}
              onClick={handleSelect}
            >
              {isSelected ? "Deselect" : "Select"}
            </button>
        </div>
        </div>
      </div>
    );
  }
  Track.propTypes = {
    image_url: PropTypes.arrayOf(PropTypes.element),
    album_name: PropTypes.bool,
    track_title: PropTypes.bool,
    artist_name: PropTypes.bool 
  }
  export default Track;