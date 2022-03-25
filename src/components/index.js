import '../App.css';

function Song (tamp) {
    return (
    //   <div className="track">
    //       <img
    //         className="track-image"
    //         src={tamp.image}
    //       />
    //     <div className="playlist">
    //       <h5 className="track-tittle">{tamp.title}</h5>
    //       <h2 className="track-album">{tamp.album}</h2>
    //       <button className="track-button">
    //         Select
    //       </button>
    //     </div>
    //   </div>
    
    <div className="track">
     <ul>
        <li className="track-image"><img src={tamp.image} alt="Album" /></li>
         <li className="detail">
           <h1 id="track-artist">{tamp.artists}</h1>
           <h4 id="track-album">{tamp.album}</h4>
           <h2 id="track-tittle">{tamp.title}</h2>
           <button id="track-button">SELECT</button>
         </li>
       </ul>
     </div>

    );
  };
  
  export default Song;
  