import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {coronaSearch} from '../../actions/index';
import  ShowSearch from '../show_search';
import {Link} from 'react-router';
import Header from '../header';
import Footer from '../footer';


class SearchCorona extends Component{

    constructor(props){
        super(props);
        this.state= {term: ''};

        this.onInputChange= this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.coronaSearch(this.state.term);
        this.setState({term: ''})
    }
    
    render(){
        return(
            <div> 
<Header />
            <section className="page_title">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12 d-flex">
                        <div className="content_box">
                           <ul className="bread_crumb text-center">
                              <li className="bread_crumb-item">
                                  <Link to="/">
                                  Home
                                  </Link>
                                  
                                  </li>
                              <li className="bread_crumb-item active"> Search</li>
                           </ul>
                           <h1>
                               Search For A Country
                           </h1>
                          
                        </div>
                        
                     </div>
                     
                  </div>
                        <div className="footer_widgets tp_two">
                            <div className="inner_widgets">
                                <form onSubmit={this.onFormSubmit}>
                                    <input 
                                    type="text"
                                    placeholder="Live Search for countries only"
                                    className="form-control"
                                    value={this.state.term}
                                    onChange={this.onInputChange}
                                    />
                                    <button className="sub_btn" type="submit"><span className="flaticon-search "></span>
                                    </button>
                                </form>
                            </div>
                        </div>
               </div>
            </section>
            <section className="faq_all">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">

                     <ShowSearch />

                     </div>
                  </div>
               </div>
            </section>
<Footer />
        </div>
        )
    }
}


export default connect(null, {coronaSearch}) (SearchCorona);

