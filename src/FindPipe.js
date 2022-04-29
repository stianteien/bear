
import './App.css';

function FindPipe() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        //console.log(file)
        alert("Finding pipes will soon be available!");
    }



    return (
      <div class="div_center">
        <form onSubmit={handleSubmit}>
            <button type="submit">Find my pipe!</button>
        </form>

        

      </div>
    );
  }
  
  export default FindPipe;