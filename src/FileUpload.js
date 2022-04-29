
import React, { useState } from "react";
  
function FileUploadComponent() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="App">
            <h2>Find my pipe!</h2>
            <p>
                The next days a new function will arrive! It is called <b> <i> find my pipes! </i> </b> <br></br>
                Upload your favorite ortophoto or oblique photograph of a house. <br></br>
                Then extremely advanced artificial intelligence made by our finest scientists will find your pipes! <br></br>
                <br></br> 
                <b>For free the next few weeks.</b>
            </p>
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>
  
    );
}
  
export default FileUploadComponent;