import React from "react";
import "./Section.css";
import {MdArrowForward} from "react-icons/md";

 const  Section = ()=>{
     return(
         <section  className="section-1">
<div className="section-container">

<div className="text">

<h1>Day Starts With a piece  of  <span>piza</span> </h1>
<h4>And ends two piece of piza</h4> 
<button>Discover</button>
<button>Menu</button>
</div>


<div className="black-box">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel libero metus. Nullam tortor justo, feugiat quis sapien sed, tincidunt bibendum ante. Integer vehicula nulla nec hendrerit rutrum. Mauris fermentum feugiat velit at malesuada. Etiam nec pellentesque quam. Aliquam ex lectus, malesuada quis fringilla ornare, blandit in metus. Quisque id diam ipsum. 
</p>
<button>
<span>More</span>
<MdArrowForward className="arrowforward"/>
</button>
</div>
</div>

         </section>
     );
 };
 export default Section;