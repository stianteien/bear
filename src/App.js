import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div class="div_center">
      <Helmet> 
        <title>Bjørnis heimesia!</title>
      </Helmet>
      <h1 class="div_center"> Bjørnar sin hjemmeside. </h1>
      
      <div class="div_center"> 
        <div class="div_litle_right">
          <img src={process.env.PUBLIC_URL + "/goat2.jpg"} height={250} width={250} />
        </div> 
      </div>
      
      <br />
    </div>
  );
}

export default App;
