



// import "./footer.css";
// import footerData from "../../json/component.json";

// function Footer() {

//   const selectedFooter = footerData.components.find((component) => component.id === 6);
//    console.log(selectedFooter);
//    console.log(selectedFooter.id);

//   if (!selectedFooter) {
//     console.error("Footer data with id=6 is missing or not loaded correctly:", footerData);
//     return null;
//   }

//   return (
//     <div className="footer">
//       {/* Footer Logo Section */}
//       <div className="footer-logo">
//         <div><span>.\</span></div>
//         <div>{selectedFooter.logoText}</div>
//         <p>{selectedFooter.tagline}</p>
//         <button>
//           {selectedFooter.socialIcons.map((icon, index) => (
//             <span key={index} className={`bi bi-${icon} m-2`}></span>
//           ))}
//         </button>
//       </div>

//       {/* Footer Sections */}
//       <div className="footer-sub">
//         {Object.entries(selectedFooter.sections).map(([title, items], index) => (
//           <div key={index}>
//             <ol>
//               <h3>{title}</h3>
//               {Array.isArray(items)
//                 ? items.map((item, idx) => <li key={idx}>{item}</li>)
//                 : Object.entries(items).map(([key, value], idx) => <li key={idx}><strong>{key}:</strong> {value}</li>)}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Footer;


import "./footer.css";
import footerData from "../../json/component.json";

function Footer() {
  // Fetch footer data where id = 6
  const selectedFooter = footerData.components.find((component) => component.id === 6);
  console.log(selectedFooter);
   console.log(selectedFooter.id);
 
  return (
    <div className="footer">
      {/* Footer Logo Section */}
      <div className="footer-logo">
        <div><span>.\</span></div>
        <div>{selectedFooter.logoText}</div>
        <p>{selectedFooter.tagline}</p>
        <button>
          {selectedFooter.socialIcons.map((icon, index) => (
            <span key={index} className={`bi bi-${icon} m-2`}></span>
          ))}
        </button>
      </div>

      {/* Footer Sections */}
      <div className="footer-sub">
        <div>
          <h3>Surgical</h3>
          <ol>
            {selectedFooter.sections.Surgical.map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        </div>

        <div>
          <h3>Cosmetic</h3>
          <ol>
            {selectedFooter.sections.Cosmetic.map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        </div>

        <div>
          <h3>General</h3>
          <ol>
            {selectedFooter.sections.General.map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ol>
            {selectedFooter.sections["Quick Links"].map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        </div>

        <div>
          <h3>Contact</h3>
          <ol>
            <li><strong>Phone:</strong> {selectedFooter.sections.Contact.Phone}</li>
            <li><strong>Email:</strong> {selectedFooter.sections.Contact.Email}</li>
            <li><strong>Address:</strong> {selectedFooter.sections.Contact.Address}</li>
            <li><strong>Working Hours:</strong> {selectedFooter.sections.Contact["Working Hours"]}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Footer;

