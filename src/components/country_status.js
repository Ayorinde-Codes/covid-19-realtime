import React, {Component} from 'react';

import axios from 'axios';

export default class CountryStatus extends Component {
  
  constructor(props){
      super(props);
      this.state = {countryState: ''}
  }

  componentDidMount() {
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${this.props.country}`)
      .then(res => {
        const countryState = res.data;
        this.setState({countryState });
      })
  }

  render() {

    return (

    <div>
        <h6><span>Total Cases :</span> {this.state.countryState.cases}</h6>
        <h6><span>Total Deaths :</span> {this.state.countryState.deaths}</h6> 
    </div>
    )
  }
}