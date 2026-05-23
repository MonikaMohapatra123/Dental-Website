

// import React from "react";
// import "./doctor.css";

// import componentsData from "../../json/component.json";
// function Doctor() {
//   const doctorData = componentsData.components.find((comp) => comp.name === "Doctor");

//   if (!doctorData) return null; // If no data found, return nothing

//   return (
//     <div className="doctor-container">
//       {/* Doctor Images */}
//       <div
//       className="d-flex ">
//         {doctorData.images.map((img, index) => (
//           <div key={index}>
//             <img src={img.src} alt={img.alt} />
//           </div>
//         ))}
//       </div>

//       {/* Doctor Text Section */}
//       <div
     
//       className="doctor-text">
//         <h2>{doctorData.text.heading}</h2>
//         {doctorData.text.paragraphs.map((para, index) => (
//           <p key={index}>{para}</p>
//         ))}
//         <button>
//           {doctorData.text.button.text}
//           <span className={doctorData.text.button.iconClass}></span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Doctor;



import React from "react";
import "./doctor.css";
import componentsData from "../../json/component.json";

function Doctor() {
  const doctorData = componentsData.components.find((comp) => comp.id === 2);
    console.log(doctorData);
    console.log(doctorData.id);
  if (!doctorData) return <div>Error: Doctor data not found</div>;

  return (
    <div className="doctor-container">
      {/* Doctor Images */}
      <div className="d-flex">
        <img src={doctorData.image1} alt="doctor-1" />
        <img src={doctorData.image2} alt="doctor-2" />
      </div>

      {/* Doctor Text Section */}
      <div className="doctor-text">
        <h2>{doctorData.heading}</h2>
        <p>{doctorData.text1}</p>
        <p>{doctorData.text2}</p>
        <p>{doctorData.text3}</p>
        <button>
          {doctorData.buttonText} <span className={doctorData.buttonIcon}></span>
        </button>
      </div>
    </div>
  );
}

export default Doctor;

