import React, { Component } from 'react'
import {Link} from 'react-router';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Header from '../header';
import Footer from '../footer';


class NigeriaCases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 15,
            currentPage: 0
        };

        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedNigeriaData() {
        axios
            .get(`https://covidnigeria.herokuapp.com/api`)
            .then(res => {

                const data = res.data.data.states;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => 

                         <tr key={pd._id}>
                            <td>{pd.state} </td>
                            <td> {pd.confirmedCases}  </td>
                            <td>{pd.casesOnAdmission}</td>
                            <td> {pd.discharged}  </td>
                            <td> {pd.death}  </td>
                         </tr>
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            })
            .catch(res=> res.error);
    }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedNigeriaData()
        });
    };

    componentDidMount() {
        this.receivedNigeriaData()
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
                              <li className="bread_crumb-item active"> Nigeria Cases</li>
                           </ul>
                           <h1>
                               List Of Cases in Nigeria States
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
                                        <th>State</th>
                                        <th>Confirmed Cases</th>
                                        <th>Cases On Admission</th>
                                        <th>Discharged</th>
                                        <th>Deaths</th>


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


export default NigeriaCases;


