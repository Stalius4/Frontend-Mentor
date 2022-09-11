import leftPic from "./images/bg-main-desktop.png"
import cardLogo from "./images/card-logo.svg"

import './App.css';
import React, {useState} from "react";
function App() {
const initialValue = {cardHolder:"",cardNumber:"", expMM:"", expYY:"", CVC:""}
const [formValues, setFormValues] = useState(initialValue)
const [formError, setFormError] = useState({})

const handleChange = (e) => {
  const { name, value} = e.target
  setFormValues({...formValues, [name]:value})
  console.log(formValues)
}

const handleSubmit =(event) =>{
  event.preventDefault();
setFormError(validation(formValues))
console.log(formError, "form error")
}

const validation = (values) => {
  const digiRegex = /^[0-9]*$/
  const errors = {}



    for(let i = 0; i< values.cardHolder.length; i++){
        if (digiRegex.test(values.cardHolder[i]))  {
          errors.cardHolder= "Wrong format, letters only"
        }
        
      }
    if(values.cardNumber.length<=0){
      errors.cardNumber= "error1" // cannot be empty
    } 
    for(let i = 0; i< values.cardNumber.length; i++){
      if (!digiRegex.test(values.cardNumber[i]))  {
        errors.cardNumber= "error2" // Wrong format, numbers only
      }}
      return errors
}

const slicedCardNumber = ( num1, num2) =>{
const cardNumbers = formValues.cardNumber
const newString =cardNumbers.slice(num1, num2)
return newString
}


  return (
    <div className="main-box">
      <div className="front-card">
        <img src={cardLogo} alt="card logo" className="logo-position"/>
        <div className="card-numbers">{formValues.cardNumber ? ` ${slicedCardNumber(0,4)}  ${slicedCardNumber(4,8) }  ${slicedCardNumber(8,12)}  ${slicedCardNumber(12,16)}`: "0000 0000 0000 000"}</div>
        <div className="flex-row space-between">
          <div>{formValues.cardHolder ? formValues.cardHolder: "Jane Appleseed"}</div>
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
              className={formError.cardHolder ? "name-input input-style-red" : "name-input input-style"}
              onInput="javascript: "
              type="text"
              placeholder="e.g. Jane Appleseed"
            maxLength="25"
            onChange={handleChange}
            value={formValues.name}
            name="cardHolder"
            
             
            />
            <div className="error-msg">
              {formError.cardHolder ? "Wrong format, letters only" : <div>&nbsp;</div>}
              </div>
          </label>
          <label className="flex-column uppercase ">
            Card Number
            <input
            onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              className="name-input input-style"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              name= "cardNumber"
              value={formValues.cardNumber}
              onChange={handleChange}
              maxLength="16"
            />
             <div className="error-msg">
              {formError.cardNumber === "error1" ? "Can't be blank" : 
              formError.cardNumber === "error2"?"Wrong format, numbers only": <div>&nbsp;</div>}
              </div>
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


// const [details, setDetails]=useState({
//   name:"",
//   cardNumber:"",
//   expDateMM:"",
//   expDateYY:"",
//   cvc:"",
//   nameError:false,
//   cardNumberError: false,
//     }) 



// const checkInpNumber = (number) => {
//   if(number.length === 16){
//     for(let i = 0 ; i< number.length ; i++){
//       if(!isNaN(number[i])){
//         setDetails({cardNumber:number})
//       }
//     }
//   }

// }
// const checkInpName= (string) =>{   
//   for(let i = 0; i< string.length; i++){// iterate  through input value 
//     if (!isNaN(string[i]) )  {// if value is number 
//       setDetails({nameError:true})
//     }
//     else if (isNaN(string[i])){// if value isnot a number
//       setDetails({
//         nameError:false, 
//         name:string
//       })
      
//     }
//   }
  
// }