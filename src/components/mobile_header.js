import React from 'react';

function MobileHeader(){

    return(
   <div>
      <div className="bsnav-mobile">
         <div className="bsnav-mobile-overlay"></div>
         <div className="navbar">
            <button className="navbar-toggler toggler-spring mobile-toggler"><span className="fa fa-close"></span></button>
         </div>
      </div>
 
      <div className="side-menu__block">
         <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
         </div>

         <div className="side-menu__block-inner">
            <div className="row">
               <div className="col-lg-12">
                  <div className="logo_site">
                     Corona
                  </div>
                  
                  <p>Get Latest update of COVID-19</p>
                   </div>
            </div>

         </div>
      </div>

      <div className="search-popup">
         <div className="search-popup__overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
         </div>
      </div>

      </div>
      )
}
export default MobileHeader;