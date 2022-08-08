import logo from './logo.svg';
import './App.css';
import ButtonCreator from './components/ButtonCreator';
import 'animate.css'

function App() {
  return (
    <div>
      <h1 style={{marginTop:50}} className="App animate__animated animate__fadeInTopLeft"><strong><i><span style={{ color: 'red' }}>R</span><span style={{ color: 'green' }}>G</span><span style={{ color: 'blue' }}>B</span></i> CALCULATOR</strong> </h1>
      <div style={{marginTop:40}} className="App animate__animated animate__fadeInBottomRight">
        <ButtonCreator />
      </div>
    </div>
  );
}

export default App;
