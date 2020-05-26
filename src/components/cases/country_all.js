import React, { Component } from 'react'
import {Link} from 'react-router';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Header from '../header';
import Footer from '../footer';


class CountryAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0
        };

        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        axios
            .get(`https://corona.lmao.ninja/v2/countries`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => 
                // <React.Fragment>
                    <tr key={pd.countryInfo._id}>
                        <td>{pd.country} </td>
                        <td> <img src={pd.countryInfo.flag} className="img-fluid countryPhoto" alt="img" /> </td>
                        <td> {pd.cases}  </td>
                        <td>{pd.recovered}</td>
                        <td> {pd.deaths}  </td>
                        <td> {pd.todayCases}  </td>
                        <td> {pd.todayDeaths}  </td>


                    </tr>
                // </React.Fragment>
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            }).catch(res=> res.error);

    }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    };

    componentDidMount() {
        this.receivedData()
    }

    render() {
        return (
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
                              <li className="bread_crumb-item active"> Countries</li>
                           </ul>
                           <h1>
                               List of all Countries Cases
                           </h1>
                          
                        </div>
                        
                     </div>
                     
                  </div>
                        
               </div>
            </section>
            <section className="faq_all">
               <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Flag</th>
                                        <th>Cases</th>
                                        <th>Recoverd</th>
                                        <th>Deaths</th>
                                        <th>Today Case</th>
                                        <th>Today Deaths</th>


                                    </tr>
                                </thead>
                                <tbody>

                                {this.state.postData}

                                </tbody>
                            </table>
                        </div>                        
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}/>
                        </div>
                  </div>
               </div>
            </section>
<Footer />
        </div>        )
    }
}

export default CountryAll
