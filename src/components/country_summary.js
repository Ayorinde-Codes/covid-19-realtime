import React from 'react';
import CountryStatus from './country_status';


export default function CountrySummary() {
    return (
        <div>

                     <div className="funfacts_box">
                        <div className="image_box text-center">
                           <img src="assets/image/resources/funfacts-home-4.png" className="img-fluid" alt="img" />
                        </div>
                        <div className="fun_facts_no">
                           <div className="fact_one facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/spain.svg" className="img-fluid svg_image" alt="Iran" />
                                       <h2>Iran</h2>
                                    </div>
                                    <div className="facts_total">                                      
                                       <CountryStatus country='iran' />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="fact_two facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/usa.svg" className="img-fluid svg_image" alt="usa" />
                                       <h2>usa</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='usa' />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="fact_three facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/uk.svg" className="img-fluid svg_image" alt="uk" />
                                       <h2>Uk</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='uk' />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="fact_four facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/china.svg" className="img-fluid svg_image" alt="china" />
                                       <h2>China</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='china' />

                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="fact_five facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/india.svg" className="img-fluid svg_image" alt="india" />
                                       <h2>India</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='india' />

                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="fact_six facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/nigeria.svg" className="img-fluid svg_image" alt="nigeria" />
                                       <h2>Nigeria</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='nigeria' />

                                    </div>
                                 </div>
                              </div>
                           </div>


                           <div className="fact_seven facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/italy.svg" className="img-fluid svg_image" alt="italy" />
                                       <h2>Italy</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='italy' />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="fact_eight facts">
                              <div className="fact_box">
                                 <div className="fact_number_box">
                                    <div className="image">
                                       <img src="assets/image/svg/germany.svg" className="img-fluid svg_image" alt="germany" />
                                       <h2>Germany</h2>
                                    </div>
                                    <div className="facts_total">
                                       <CountryStatus country='germany' />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
        </div>
    )
}
