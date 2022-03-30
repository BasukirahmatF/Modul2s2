const Track = (props) => {
    return (
      <div className="image-card">
        <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover rounded h-40 w-full"/>
        <p className="tiltle-song">{props.track_title}</p>
        <div className="">
          <p className="artist-name">{props.artist_name}</p>
        </div>
      </div>
    );
  }
  export default Track;