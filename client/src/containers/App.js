import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/Content';
import About from './About/About';
import Terms from './Terms/Terms';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Content} />
              <Route path='/about' exact component={About} />
              <Route path='/terms' exact component={Terms} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;