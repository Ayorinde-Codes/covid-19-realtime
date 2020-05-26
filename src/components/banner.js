import React, {Component} from 'react'
import {coronaSummary} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Banner extends Component {
   componentDidMount(){
        this.props.coronaSummary(); 
    }

renderSummary(){

    const totalConfirmed= this.props.summary.map(summaryData=>summaryData.cases);
    const totalRecovered= this.props.summary.map(summary=>summary.recovered);
    const totalDeath= this.props.summary.map(summary=>summary.deaths);

    return (
        <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="fun_facts_box type_three">
                           <span className="flaticon-hospitalisation icon"></span>
                           <div className="content_box">
                              <h2>Total Confirmed</h2>
                              <h6><span>{totalConfirmed[0]}</span>+</h6>
                            </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="fun_facts_box type_three">
                           <span className="flaticon-overpopulation icon"></span>
                           <div className="content_box">
                              <h2>Countries / Regions</h2>
                              <h6><span className="counter-value">170</span>+</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="fun_facts_box type_three">
                           <span className="flaticon-family icon"></span>
                           <div className="content_box">
                              <h2>Total Recoverd</h2>
                              <h6><span>{totalRecovered[0]}</span>+</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="fun_facts_box type_three last">
                           <span className="flaticon-death icon"></span>
                           <div className="content_box">
                              <h2>Confirmed Deaths</h2>
                              <h6><span>{totalDeath[0]}</span>+</h6>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
    )

}
    render(){
       if(!this.props.summary){
          return <div> Loading...</div>
       }
    return (
        <div>
            <section className="banner type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 d-flex">
                        <div className="banner_text">
                           <h1>COVID-19 <br />Latest Updates</h1>
                           <p>The Virus Is Thought To Spread Mainly From Person-To-Person. Between People Who Are In Close Contact With One Another.
                           <br />Maintain Social Distance!</p>
                           <div className="link_box">
                              <Link to="countries" >
                              <div className="theme_btn tp_three">Latest News <span className="flaticon-arrow"></span></div>
                              </Link>

                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="image_box">
                           <div className="image image_1 rotate-me">
                              <img src="assets/image/main-slider/home-3-slider-1.png" className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_2">
                              <img src="/assets/image/main-slider/home-3-slider-2.png" className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_3">
                              <img src="/assets/image/main-slider/home-3-slider-bg-1.png" className="img-fluid" alt="img" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="funfacts type_three">
            {this.renderSummary()}
            </section>
        </div>
    )
 } 
}

function mapStateToProps({summary}){
    return {summary}
}

export default connect(mapStateToProps, {coronaSummary}) (Banner);