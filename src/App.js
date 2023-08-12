import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Payment_gateway from './components/Payment_gateway/Payment_gateway';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Feature />
        <Payment_gateway />
      </div>
    </div >
  );
}

export default App;
