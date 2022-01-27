import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

class App extends Component{
  render(){
    return (
      <div className="container">
        <Navbar />
        <hr/>
        <User 
          name="Mehmet" 
          job="Software Engineer" 
          team="Besiktas"
        />
        <hr/>
        <User 
          name="Onur" 
          job="Software Engineer" 
          team="Fenerbahce"
        />
        <User/>
      </div>
    );
  }
}

export default App;
