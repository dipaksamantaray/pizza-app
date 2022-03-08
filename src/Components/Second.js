import React from "react";
import "./Second.css";
import a1 from "./image/a1.jpg";
import a2 from "./image/a2.png";
import a3 from "./image/a3.jpg";
import a4 from "./image/a4.jpeg";
import a5 from "./image/a5.jpeg";
import a6 from "./image/a6.jpg";

const Second=()=>{
    return(
        <section className="second-section">
<div className="second-container">

 <div className ="card">
<img src={a1} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>  
 </div>

  <div className ="card">
<img src={a2} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>
 </div>

  <div className ="card">
<img src={a3} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>
 </div>

  <div className ="card">
<img src={a4} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>
 </div>

  <div className ="card">
<img src={a5} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>
 </div>

  <div className ="card">
<img src={a6} alt=""/>
<p>Big Boy Spicy</p>
<button>Order</button>
 </div>

</div>



        </section>
    
    );
};
export default Second;