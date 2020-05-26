import React from 'react'
import {Link} from 'react-router';
import Carousel from './carousel';

export default function Prevention() {
    return (
        <div>
            <section className="preventions type_four" >
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="heading text-center icon_dark tp_three">
                     <div className="searchbutton">
                     <Link to="search" className="theme_btn tp_one">
                     Search A Country  <i className="flaticon-search icon"> </i>
                    </Link> 
                    </div>


                        <h6>Prevention Coronavirus</h6>
                        <h1>How to protect yourself? </h1>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12 padding_zero">
                     <Carousel />
                  </div>
               </div>
            </div>
         </section>

         <section className="symptoms type_four">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="content_box">
                        <div className="row">
                           <div className="col-lg-12">
                              <div className="heading  icon_dark tp_three">
                                 <h6>SYMPTOMS </h6>
                                 <h1>Watch for symptoms </h1>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="symptoms_box type_four wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                 <p><span>Headache </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                 <p> <span>Sore Throat </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                 <p><span>Shortness Of Breath </span>Reported illnesses have ranged have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                 <p><span>Diarrhea </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                 <p><span>Fever </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                 <p><span>Cough </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                 <p><span>Vomit </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box type_four  wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                 <p> <span>Tired </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="image_box">
                        <div className="image">
                           <img src="assets/image/resources/covid.png" className="img-fluid" alt="symptoms" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         <section className="handwash type_one">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="heading text-center icon_dark tp_three">
                        <h6>Protect yourself By hand washing</h6>
                        <h1>How to wash your hands </h1>
                        <p>Follow the steps below to wash your hands effectively</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/1.png" className="img-fluid" alt="img" />
                           <span>01</span>
                        </div>
                        <h2>Wet hands</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/2.png" className="img-fluid" alt="img" />
                           <span>02</span>
                        </div>
                        <h2>Apply soap</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/3.png" className="img-fluid" alt="img" />
                           <span>03</span>
                        </div>
                        <h2>Rub hands palm to palm</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/4.png" className="img-fluid" alt="img" />
                           <span>04</span>
                        </div>
                        <h2>Lather the back of both hands</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/5.png" className="img-fluid" alt="img" />
                           <span>05</span>
                        </div>
                        <h2>Scrub between  your fingers</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/6.png" className="img-fluid" alt="img" />
                           <span>06</span>
                        </div>
                        <h2>Rub the back of fingers on the  opposing palm</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/9.png" className="img-fluid" alt="img" />
                           <span>07</span>
                        </div>
                        <h2>Rinse hands</h2>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="hand_box  type_one wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="image_box">
                           <img src="assets/image/hand-wash/10.png" className="img-fluid" alt="img" />
                           <span>08</span>
                        </div>
                        <h2>Dry with a single use towel</h2>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </div>
    )
}
