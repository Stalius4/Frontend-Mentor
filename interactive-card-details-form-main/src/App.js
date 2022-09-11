import leftPic from "./images/bg-main-desktop.png"
import cardLogo from "./images/card-logo.svg"

import './App.css';
import React, {useState} from "react";
function App() {
const initialValue = {cardHolder:"",cardNumber:"", expMM:"", expYY:"", CVC:""}
const [formValues, setFormValues] = useState(initialValue)


const handleChange = (e) => {
  
  
  
  const { name, value} = e.target
  setFormValues({...formValues, [name]:value})
  console.log(formValues)
  console.log("inival", formValues.name)
  
}




const handleSubmit =(event) =>{
  event.preventDefault();

}

const checkInpName= (string) =>{   
  for(let i = 0; i< string.length; i++){// iterate  through input value 
    if (!isNaN(string[i]) )  {// if value is number 
      setDetails({nameError:true})
    }
    else if (isNaN(string[i])){// if value isnot a number
      setDetails({
        nameError:false, 
        name:string
      })
      
    }
  }
  
}
const [details, setDetails]=useState({
  name:"",
  cardNumber:"",
  expDateMM:"",
  expDateYY:"",
  cvc:"",
  nameError:false,
  cardNumberError: false,
    }) 



const checkInpNumber = (number) => {
  if(number.length === 16){
    for(let i = 0 ; i< number.length ; i++){
      if(!isNaN(number[i])){
        setDetails({cardNumber:number})
      }
    }
  }

}


  return (
    <div className="main-box">



      <div className="front-card">
        <img src={cardLogo} alt="card logo" className="logo-position"/>
        <div className="card-numbers">{details.cardNumber ? details.cardNumber: "0000 0000 0000 000"}</div>
        <div className="flex-row space-between">
          <div>{initialValue.name ? initialValue.name: "Jane Appleseed"}</div>
          <div>00/00</div>
        </div>
      </div>


      <div className="back-card">
     <div className="back-card-nr">000</div> 
   </div>
      <img className="left-bg" src={leftPic} alt="left bg" />
    
      <div className="input-box">
        <form className="input-inner" 
        onSubmit={handleSubmit}
        >
          <label className="flex-column uppercase">
            Cardholder Name
            <input
              className={details.nameError ? "name-input input-style-red" : "name-input input-style"}
              type="text"
              placeholder="e.g. Jane Appleseed"
            maxLength="25"
            onChange={handleChange}
            value={formValues.name}
            name="cardHolder"
            
             
            />
            <div className="error-msg">{details.nameError ? "Wrong format, letters only" : <div>&nbsp;</div>}</div>
          </label>
          <label className="flex-column uppercase ">
            Card Number
            <input
              className="name-input input-style"
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
              name= "cardNumber"
              value={formValues.cardNumber}
              onChange={handleChange}
            />
             <div className="error-msg">{details.nameError ? "Wrong format, numbers only" : <div>&nbsp;</div>}</div>
          </label>
          <div className="flex-row  gap-20">
            <label className="flex-column uppercase">
              Exp. Date (MM/YY)
              <div className="flex-row gap-5">
                <input
                  className="numbers-input input-style"
                  type="number"
                  placeholder="MM"
                  name="expMM"
                  onChange={handleChange}
                  value={formValues.expMM}
                />
                <input
                  className="numbers-input input-style"
                  type="number"
                  placeholder="YY"
                  name="expYY"
                  onChange={handleChange}
                  value={formValues.expYY}
                />
              </div>
            </label>
            <label className="flex-column uppercase">
              CVC
              <input
                className="numbers-input width-50 input-style"
                type="number"
                placeholder="e.g. 123"
                name="CVC"
                onChange={handleChange}
                value={formValues.CVC}
              />
            </label>
          </div>
          <input
            className="name-input submit-btn "
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      {/* <!-- Completed state start --> */}
      Thank you! We've added your card details Continue
    </div>
  );
}

export default App;
