import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
class App extends React.Component {
  render() {
    return (
      <Router>
          <Navigator/>
          {/* <Route render={() => ((store.session.has('token')) ? <Navigation history={history}/> : null)}/> */}
          <Route exact path="/" component={Home}/>
          <Footer/>
      </Router>
    );
  }
}
 
export default App;