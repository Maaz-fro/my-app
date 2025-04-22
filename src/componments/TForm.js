import React , {useState} from 'react'



export default function TForm(props) {
  const handleUpClicke=()=>{
    console.log("Upper the clear" + text);
    setText("You have clicked on rghiwskrfld")
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Upper","Success")
  }

  const handleLoClicke=()=>{
    console.log("Upper the clear" + text);
    setText("You have clicked on rghiwskrfld")
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lower","Success")
  }

  const handleLoCopy=()=>{
    var text  = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy","Success")
  }

  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
    props.showAlert("Extra spaces handles","Success")
  }




  const handleClearClicke=()=>{
    let newtext = '';
    setText(newtext)
    props.showAlert("Text clear","Success")
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }


  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'? 'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'? 'gray':'white',color:props.mode=== 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>

        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClicke}>Upper to convert</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClicke}>Lower to convert</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClicke}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Handle Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark'? 'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter the something in the textbox above"}</p>
    </div>
    </>
  )
}
