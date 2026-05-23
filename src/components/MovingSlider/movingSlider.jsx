

// import React from "react";
// import "./movingslider.css"; // Import CSS
// import componentJson from "../../json/component.json"; // Import JSON

// const MovingSlider = () => {
//   // Find "MovingSlider" in the JSON
//   const sliderData = componentJson.components.find(
//     (component) => component.name === "MovingSlider"
//   );

//   // If not found, show error
//   if (!sliderData) {
//     return <div>Error: MovingSlider data not found in JSON</div>;
//   }

//   return (
//     <div className="main-move">
//       <div className="movingSlider">
//         {/* First Slider */}
//         <div className="slider-container">
//           <ul className="moving-list">
//             {sliderData.items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Second Slider (For smooth animation) */}
//         <div className="slider-container2">
//           <ul className="moving-list2">
//             {sliderData.items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovingSlider;


import React from "react";
import "./movingslider.css"; 
import componentJson from "../../json/component.json"; 

const MovingSlider = () => {

  const sliderData = componentJson.components.find(
    (component) => component.id === 4
  );
  console.log(sliderData);
  console.log(sliderData.id);

  if (!sliderData) {
    return <div>Error: MovingSlider data not found in JSON</div>;
  }

  return (
    <div className="main-move">
      <div className="movingSlider">
        {/* First Slider */}
        <div className="slider-container">
          <ul className="moving-list">
            {sliderData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Second Slider (For smooth animation) */}
        <div className="slider-container2">
          <ul className="moving-list2">
            {sliderData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovingSlider;


