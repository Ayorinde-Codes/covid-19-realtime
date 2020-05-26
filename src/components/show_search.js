import React, { Component } from 'react'
import {connect} from 'react-redux';

class ShowSearch extends Component {

    renderSearch(data){
       
        const cases= data.cases;
        const deaths= data.deaths;
        const name= data.country;
        const recovered= data.recovered;
    
      return(
        <tr key={name}>
            <td>{name}</td>
            <td> {cases}  </td>
            <td>{recovered}</td>
            <td> {deaths}  </td>
        </tr>
    )
}
    render() {
        if(!this.props.searchcorona){
            return  <div>Loading...</div>
            }
        return (
            <div>
            <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>recovered</th>
                        <th>Death</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.searchcorona.map(this.renderSearch)}
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        searchcorona: state.searchcorona
    }
}
export default connect(mapStateToProps) (ShowSearch);




