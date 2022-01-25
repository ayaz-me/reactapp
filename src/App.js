import './App.css';
import User from './components/User';

function App() {
  const pi = 3.14;
  const isAuth = false;
  return (
    <div className="App">
      <h1>{10 % 3}</h1>
      <h1>{"Mehmet".toUpperCase()}</h1>
      <h1>{pi * 50}</h1>
      <div>
        {isAuth ? <p> Kullanıcı Kayıtlı</p> : <p>null</p>}
      </div>
      <User />
    </div>
  );
}

export default App;
