import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="div_center">
      <h1> Bjørnar sin hjemmeside. </h1>

      <br></br>
      <br></br>
      <br></br> 
      <img src={process.env.PUBLIC_URL + "/goat.PNG"} height={250} width={250} />
      <br />
    </div>
  );
}

export default App;
