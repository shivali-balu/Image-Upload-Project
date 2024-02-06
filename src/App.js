import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css' ; 
import FileUpload from "./FileUpload";

function App() {
  return (
    <div style={{textAlign:'center'}}> 
        <h2 className="mt-3">React + Node Image Upload Project</h2> 
        <FileUpload/> 
    </div>
  );
}

export default App;
