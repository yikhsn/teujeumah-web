import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
