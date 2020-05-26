import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div className="owl-carousel four_items">
                        <div className="icon_box type_five wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <span className="flaticon-sneeze"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Wash your hands often with soap</a></h2>
                              <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                           </div>
                        </div>
                        <div className="icon_box type_five wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <span className="flaticon-vomit"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Avoid touching your eyes, nose, and mouth</a></h2>
                              <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                           </div>
                        </div>
                        <div className="icon_box type_five wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <span className="flaticon-stay-home"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Stay home if you are sick,  get medical care</a></h2>
                              <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                           </div>
                        </div>
                        <div className="icon_box type_five wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <span className="flaticon-sneeze-1"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Avoid close contact with people who  sick</a></h2>
                              <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                           </div>
                        </div>
                     </div>
        </div>
    )
}
