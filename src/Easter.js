import './Easter.css'

function Easter() {
    return (
      <div>
        <div class="div_center"> 
            <br />
            <h2>Påskemorro</h2>

            Kanskje påskeharen kommer innom i løpet av påskeuken!
            <br />
        </div>
        
        <img src={process.env.PUBLIC_URL + "/easter.jpg"} width={1100} />

      </div>
    );
  }
  
  export default Easter;