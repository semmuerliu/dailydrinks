import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Order from './components/Order';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Navigator/>
          <Route exact path="/" component={Home}/>
          <Route path="/orders/:orderId" component={Order}/>
          <Footer/>
      </Router>
    );
  }
}

export default App;