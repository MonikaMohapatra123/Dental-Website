

import"./sli.css";
import { SliderOne } from "./slider-1";
import { SliderTwo } from "./slider-2";
import { SliderThree } from "./slider-3";
export  function FinalSlider(){
  return(
    <div className="bg-black">
      <div className="card">
          <div className="card-content"><div><SliderOne/></div></div>
        </div>
        <div className="card">
          <div className="card-content"><div><SliderTwo/></div></div>
        </div>
      <div className="card">
      <div className="card-content"><div><SliderThree/></div></div></div>
       <div>
         <div className="responsive-card">
          <div className="responsive-conent"><div><SliderOne/></div></div>
          </div>
          <div className="responsive-card">
          <div className="responsive-conent"><div><SliderTwo/></div></div>
          </div>
          <div className="responsive-card">
          <div className="responsive-conent"><div><SliderThree/></div></div>
          </div> 
       </div>
    </div>
  )
}




