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
    const[text, setText] = useState('enter text here'); 
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
 {/* nclick ko fuction ma click garya text cahnge hose */}
</div>
</div>

  )
}

export default TextForm