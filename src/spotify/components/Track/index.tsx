import React, { useState } from 'react';

interface Props {
  url: string;
  title: string;
  artist: string;
  select: boolean;
  toggle: () => void;
}
const Track: React.FC<Props> = ({ url, title, artist, select, toggle }) => {
  const [isSelected, setIsSelected] = useState<boolean>(select);

  const handleSelect: () => void = () => {
    setIsSelected(!isSelected);
    toggle();
  };

  return (
    <div className="displaysong">
      <div className="image-card">
      <img src={url} alt="Track Playlist" aria-label="image-track" />
      <div className="infosong">
        <p aria-label="title-track">{title}</p>
        <p aria-label="artist-track">{artist}</p>
      </div>
      <button
        aria-label="button-track"
        className={`btn btn-select ${
          isSelected ? 'btn-primary' : 'btn-secondary'
        }`}
        onClick={handleSelect}
        >
        {isSelected ? 'Deselect' : 'Select'}
      </button>
      </div>
    </div>
  );
};

export default Track;
