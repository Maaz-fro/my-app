import React , {useState} from 'react'



export default function TForm(props) {
  //let disabled={}

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
    document.getSelection().removeAllRanges();
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
          <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'? '#13466e':'white',color:props.mode=== 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>

        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClicke}>Upper to convert</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClicke}>Lower to convert</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClicke}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Handle Extra Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode=== 'dark'? 'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
