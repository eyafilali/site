import React from 'react'
import image from './twit.png'

function Introduction() {
    return (
      
       
                    <form>                        
                       <div>
                           <div id ="first-part">
                        <label for="first"><bold>&nbsp;Enter your Name or adresse:&nbsp;</bold></label><input type='email' />
                        <label for="first"> &nbsp; Enter your password&nbsp;</label> <input type="password" />
                        <button className="btn btn-primary">Submit</button> <br />
                        <a href="www.google.com">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;did you forget your password ? </a>
                        </div>
                        <div id="sec-part">< img height="250px"  align="top" src={image} alt="twiter" />
                        

                        <h1>see what's happening in the world</h1>
                        <h3>Join twicher now</h3>
                        <button className="btn btn-primary">sign up</button>
                        <button className="btn btn-primary">log in </button> <br></br>
                        </div>
                        <p></p>
                        <ul className="footer-list">

                       <li><a href="www" className="footer-links" >about</a></li>  
                       <li><a href="www" className="footer-links" >help center</a></li> 
                       <li><a href="www" className="footer-links">terms</a></li> 
                       <li><a href="www"className="footer-links" >privecy</a></li> 
                        <li><a href="www" className="footer-links">cookies</a></li>
                        <li><a href="www"className="footer-links" >add info</a></li>
                       <li> <a href="www"className="footer-links" >blogs</a></li>
                        </ul>
                        
                       </div>

                    </form>
                    
                    
                
        
    )
}



export default Introduction

