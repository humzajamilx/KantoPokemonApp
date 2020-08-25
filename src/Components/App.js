import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import FireType from './FireType';
import GrassType from './GrassType';
import WaterType from './WaterType';


class App extends Component {
  componentDidMount() {
  }

  render() {
  return (
    <div className="container">
     <BrowserRouter>
        <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/FireType" component={FireType} />
            <Route exact path="/GrassType" component={GrassType} />
            <Route exact path="/WaterType" component={WaterType} />

        </div>

     </BrowserRouter>
    </div>
  );
}
}


export default App;
