import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/app'
import Index from './components';
import SearchCorona from './components/cases/search_corona';
import CountryAll from './components/cases/country_all';
import NigeriaCases from './components/cases/nigeria_cases';

export default(
    
        <Route path='/' component={App} >
            <IndexRoute component={Index}/>
            <Route path="search" component={SearchCorona} />
            <Route path="countries" component={CountryAll} />
            <Route path="nigeriacases" component={NigeriaCases} />
            
        </Route>
    
);