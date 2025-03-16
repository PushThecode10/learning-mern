import React,{useState } from 'react'
const TextForm = (props) => {
    const handleupClick= () =>{
        console.log("Upperclass was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handledownClick= () =>{
        console.log("Lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
    }
   
   
    const handleonchange= (event) =>{
        console.log("onclick");
        setText(event.target.value)
      
    }
    const[text, setText] = useState(''); 
    const cleartext = () =>{
        console.log("clear the text");
        setText('');
    }
    const paragraphCount = text.trim() ? text.split("").length : 0;
  return (
<div>
    <h1>{props.heading}</h1>
<div className="mb-3">
{/* <label for="My box" className="form-label">Example textarea</label> */}
<textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="10"></textarea>
</div>
<div className="d-flex gap-2">
<button className="btn btn-primary" onClick={handleupClick}>Converter to uppercase</button>
<button className="btn btn-primary" onClick={handledownClick}>Converter to lowercase</button>
<button className="btn btn-primary" onClick={cleartext}>Clear text</button>
 {/* nclick ko fuction ma click garya text cahnge hose */}
</div>
<div className="container">
    <h2>Summary of paragraph </h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h3>Total time to read</h3>
    <p>{0.08*text.split("").length}minutes read</p>
    <h4>Preview</h4>
    <p>{text}</p>
    <p>{paragraphCount}paragraphCount</p>
    <div>
    <table class="table">
  <thead>
    <tr>
      <th>Details</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>word</td>
      <td>{text.split("").length}</td>
      
    </tr>
    <tr>
      <td>Character</td>
      <td>{text.length}</td>
      </tr>
      <tr>
      <td>paragraph</td>
      <td>{paragraphCount}</td>
      </tr>
      </tbody>
</table>
    </div>

</div>
</div>

  )
}

export default TextForm