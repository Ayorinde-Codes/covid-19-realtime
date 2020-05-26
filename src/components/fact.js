import React, { Component } from 'react';
import { connect } from 'react-redux';
import {coronaSummary} from '../actions/index';
import CountrySummary from './country_summary';
import {Link} from 'react-router';


class Fact extends Component {

    componentDidMount(){
        this.props.coronaSummary(); 
    }

renderSummaries(){

    const totalFactConfirmed= this.props.summary.map(summaryData=>summaryData.cases);
    const totalFactRecovered= this.props.summary.map(summary=>summary.recovered);
    const totalFactDeath= this.props.summary.map(summary=>summary.deaths);
    
    return (
        <div className="col-lg-2 col-md-2 d-flex">
                     <div className="funfacts_count">
                        <div className="fun_facts_box type_four">
                           <small className="flaticon-hospitalisation icon"></small>
                           <h6><span>{totalFactConfirmed[0]}</span>+</h6>
                           <h2>Worldwide Cases </h2>
                        </div>
                        <div className="fun_facts_box type_four">
                           <small className="flaticon-death icon"></small>
                           <h6><span >{totalFactDeath[0]}</span>+</h6>
                           <h2>Deaths</h2>
                        </div>
                        <div className="fun_facts_box type_four">
                           <small className="flaticon-family icon"></small>
                           <h6><span >{totalFactRecovered[0]}</span>+</h6>
                           <h2> Recovered</h2>
                        </div>
                        
                         <Link to="countries" >
                         <button className="theme_btn tp_one" type="submit">
                             <small>Get more update...</small>
                             <span className="flaticon-paper-plane "></span></button>
                         </Link>

                     </div>
                     
                  </div>
    )

}


    render() {
        if(!this.props.summary){
            return <div> Loading...</div>
         }
        return (
            <div>
                
            <section className="funfacts type_four">
            <div className="bg_icons">
               <span className="flaticon-virus one"></span>
               <span className="flaticon-virus two"></span>
               <span className="flaticon-virus three"></span>
               <span className="flaticon-virus four"></span>
               <span className="flaticon-virus five"></span>
               <span className="flaticon-virus six"></span>
               <span className="flaticon-virus seven"></span>
               <span className="flaticon-virus eight"></span>
            </div>
            <div className="container-fluid">
               <div className="row">

                  {this.renderSummaries()}
                  <div className="col-lg-10 col-md-10">
                  <CountrySummary />
                  </div>
               </div>
            </div>
         </section>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        summary: state.summary
    }
}


export default connect(mapStateToProps, {coronaSummary}) (Fact);
