const Track = ({ Judul, Artist, Album, Cover }) => {
    return (
   <div className="track">
     <ul>
        <li><img src={Cover} alt="Album" /></li>
         <li className="detail">
           <h1 id="track-artist">{Artist}</h1>
           <h4 id="track-album">{Album}</h4>
           <h2 id="track-tittle">{Judul}</h2>
           <button id="btn-play">Play</button>
         </li>
       </ul>
     </div>
    );
  }
export default Track;


