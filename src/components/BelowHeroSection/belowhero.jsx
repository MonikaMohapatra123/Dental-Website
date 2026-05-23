
// import { motion } from "framer-motion";
// import "./bhero.css";
// import IframeSlider from "./iframe";
// import jsonData from "../../json/component.json"; // Import the entire JSON file

// // Find the MovingText component from components
// const movingTextData = jsonData.components.find((comp) => comp.name === "MovingText");
// const MovingText = () => {
//   return (
//     <div className="main">
//       <div className="logoimage">
//         {movingTextData?.images?.map((image, index) => (
//           <img key={index} src={image.src} alt={image.alt} className="m-4" />
//         ))}
//       </div>
   
//  <motion.div
//   initial={{ opacity: 0, x: 200 }}  
//   whileInView={{ opacity: 1, x: 0 }}  
//   transition={{ duration: 1 }}
//   viewport={{ once: false, amount: 0.2 }}
// >
//   <p>{movingTextData?.text?.heading}</p>
// </motion.div>

//       <div className="bhero-container">
//         <div className="bhero-slider"></div>
//         <div className="bhero-text">{movingTextData?.text?.sliderText}</div>
//       </div>
//       <IframeSlider />
//     </div>
//   );
// };


// export default MovingText;


import { motion } from "framer-motion";
import "./bhero.css";
import IframeSlider from "./iframe";
import jsonData from "../../json/component.json"; // Import the entire JSON file


const MovingText = () => {
  // Find the MovingText component from components
const movingTextData = jsonData.components.find(component => component.id === 3);
 console.log(movingTextData);
 console.log(movingTextData.id);
  return (
    <div className="main">
      <div className="logoimage">
        {movingTextData?.image1 && <img src={movingTextData.image1} alt="image1" className="m-4" />}
        {movingTextData?.image2 && <img src={movingTextData.image2} alt="image2" className="m-4" />}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p>{movingTextData?.heading}</p>
      </motion.div>

      <div className="bhero-container">
        <div className="bhero-slider"></div>
        <div className="bhero-text">{movingTextData?.sliderText}</div>
      </div>
      
      <IframeSlider />
    </div>
  );
};

export default MovingText;








