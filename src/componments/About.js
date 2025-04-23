import React, { useState } from 'react'

export default function About(props) {

  // const [mystyle,setMyStyle]=useState({
  //   color:'red',
  //   backgroundcolor:'yellow'
  // })

  let mystyle = {
    color:props.mode === 'dark'? 'white':'blue',
    backgroundColor:props.mode === 'light'? 'blue':'white'
  }

  // const [btntext,setBtnText] = useState("Enable Dark Mode")
  // const toggleStyle = () =>{
  //   if(mystyle.color==='yellow'){
  //       setMyStyle({
  //         color:'red',
  //         backgroundcolor:'yellow',
  //         border:'2px solid orange'      
  //       })
  //       setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:'yellow',
  //       backgroundcolor:'red'      
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  // }
  
  return (
      <div classNameName="container" style={{color:props.mode === 'dark'? 'white':'blue'}}>
        <h1 classNameName="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle} >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}> 
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="container my-3" >
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
      </div> */}
  </div>
 
  )
}
