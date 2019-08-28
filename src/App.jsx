import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Order from './components/Order';
import CreateOrder from './pages/CreateOrder';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Navigator/>
          <Route exact path="/" component={Home}/>
          <Route path="/createorder" component={CreateOrder}/>
          <Route pazth="/orders/:orderId" component={Order}/>
          <Footer/>
      </Router>
    );
  }
}

export default App;