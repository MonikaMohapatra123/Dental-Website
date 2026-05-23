// import"./sliVideo.css";
// export function SliderVideo(){
//     return(
//         <div className="slidervideo-container">
//             <iframe src="https://www.youtube.com/embed/kYM7Qc8IXJ8?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=0&loop=1&playlist=kYM7Qc8IXJ8" frameBorder="0" allow="autoplay:encrypted-media" allowFullScreen className="videoslider"/>
//             <div className="iframe-text">Take A Virtual Tour <div className="bi bi-info-circle"></div></div>
//             <div className="Iframe-slider-text">
//                 <h4>Our Dental Services In Pune</h4>
//                 <p className="slidervideo-p" >Tooth Reshaping in Pune | Tooth Extraction in Pune | Tooth Filling in Pune | Dental Lasers Treatment in Pune | Braces Treatment in Pune | Dental Crowns in Pune | Root Canals Treatment in Pune | Teeth Whitening in Pune | Dental X-Ray in Pune | Denture Treatment in Pune | Teeth Cleaning in Pune | Dental Check-ups in Pune | Dental Implants in Pune | Full Mouth Rehabilitation in Pune | Porcelain Veneers in Pune | Crowns and Bridges in Pune</p>
//             </div>
//             <div className="Iframe-slider-text">
//                  <h4>Our Recent Blogs</h4>
//                  <p className="slidervideo-p">Dental Bridge vs Implant | Types of Dental Implants | Dental Implant Parts | Benfits of Dental Implants</p>
//             </div>
//         </div>
//     )
// }

import "./sliVideo.css";

export function SliderVideo() {
  return (
    <div className="slidervideo-container">
      
      <iframe
        title="Dental Services Video Tour"
        src="https://www.youtube.com/embed/kYM7Qc8IXJ8?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=kYM7Qc8IXJ8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="videoslider"
      ></iframe>

      <div className="iframe-text">
        Take A Virtual Tour{" "}
        <div className="bi bi-info-circle"></div>
      </div>

      <div className="Iframe-slider-text">
        <h4>Our Dental Services In Pune</h4>

        <p className="slidervideo-p">
          Tooth Reshaping in Pune | Tooth Extraction in Pune |
          Tooth Filling in Pune | Dental Lasers Treatment in Pune |
          Braces Treatment in Pune | Dental Crowns in Pune |
          Root Canals Treatment in Pune | Teeth Whitening in Pune |
          Dental X-Ray in Pune | Denture Treatment in Pune |
          Teeth Cleaning in Pune | Dental Check-ups in Pune |
          Dental Implants in Pune | Full Mouth Rehabilitation in Pune |
          Porcelain Veneers in Pune | Crowns and Bridges in Pune
        </p>
      </div>

      <div className="Iframe-slider-text">
        <h4>Our Recent Blogs</h4>

        <p className="slidervideo-p">
          Dental Bridge vs Implant | Types of Dental Implants |
          Dental Implant Parts | Benefits of Dental Implants
        </p>
      </div>

    </div>
  );
}