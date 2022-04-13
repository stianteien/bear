import './Easter.css'

function Easter() {
    return (
      <div>
        <div class="div_center"> 
            <br />
            <h2>Påskemorro</h2>

            Velkommen til påskemorro! Hintet finner dere under haren
            <br />
        </div>
        
        <img src={process.env.PUBLIC_URL + "/easter.jpg"} width={1100} />
        <br />
        <div class="div_center"> 
          <p> 
            Bokstaven er T.
            Nå kan dere finne ut av ordet og finne hva haren har gjemt!

          </p>
        </div>

      </div>
    );
  }
  
  export default Easter;