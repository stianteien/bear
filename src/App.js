import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div class="div_center">
      <Helmet> 
        <title>Bjørins heimesia!</title>
      </Helmet>
      <h1> Bjørnar sin hjemmeside. </h1>

      <br></br>
      <br></br>
      <br></br> 
      <img src={process.env.PUBLIC_URL + "/goat2.jpg"} height={250} width={250} />
      <br />
    </div>
  );
}

export default App;
