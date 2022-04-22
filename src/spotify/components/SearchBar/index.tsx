import React, { useState } from 'react';
import { RootState, useAppSelector } from '../../redux/store';
import { searchTrack } from '../../utils/fetchAPI';
import { Track as ITrack } from '../../types/spotify';

interface Props {
  onSuccess: (tracks: ITrack[]) => void;
}

const SearchBar: React.FC<Props> = ({ onSuccess }) => {
  const [text, setText] = useState<string>('');
  const accessToken: string = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );

  const handleInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const responseSearch = await searchTrack(text, accessToken);
      const tracks = responseSearch.tracks.items;

      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="search-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="query"
            placeholder="Search tracks..."
            aria-label="search-input"
            onChange={handleInput}
            value={text}
            required
          />
          <button aria-label="search-button" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
