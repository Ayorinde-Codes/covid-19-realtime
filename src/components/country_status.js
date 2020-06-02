import React, {Component} from 'react';

import axios from 'axios';

export default class CountryStatus extends Component {
  _isMounted = false;

  
  constructor(props){
      super(props);
      this.state = {countryState: ''}
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${this.props.country}`)
      .then(res => {
        if (this._isMounted) {
        const countryState = res.data;
        this.setState({countryState });
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
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