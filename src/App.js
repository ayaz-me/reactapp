import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
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
    </div>
  );
}

export default App;
