import leftPic from "./images/bg-main-desktop.png"
import cardLogo from "./images/card-logo.svg"
import successlogo from "./images/icon-complete.svg"
import topBg from "./images/bg-main-mobile.png"
import './App.css';
import React, { useEffect, useState} from "react";



function App() {


const initialValue = {cardHolder:"",cardNumber:"", expMM:"", expYY:"", CVC:"" }
const [formValues, setFormValues] = useState(initialValue)
const [formError, setFormError] = useState({})
const [accepts, setAccepts]= useState(true)



const handleChange = (e) => {
  const { name, value} = e.target
  setFormValues({...formValues, [name]:value})
  console.log(formValues)
}

const handleSubmit =(event) =>{
  event.preventDefault();
setFormError(validation(formValues) )

 
}
useEffect(() => {
  if(formError.cardHolder === "success" && formError.cardNumber === "success" && formError.expMM === "success" && formError.expYY === "success" && formError.CVC === "success" ){
    setAccepts(false)
  }

}, [formError])


const validation = (values) => {
  const digiRegex = /^[0-9]*$/;
  const errors = {};



  if (values.cardHolder.length <= 0) {
    errors.cardHolder = "error2"; // cannot be empty for Cardholders name
  }
  for (let i = 0; i < values.cardHolder.length; i++) {
    if (digiRegex.test(values.cardHolder[i])) {
      errors.cardHolder = "error1"; //Wrong format, letters only for Cardholders name"
    }
  


  if (!digiRegex.test(values.cardHolder[i]) && values.cardHolder.length > 0){
    errors.cardHolder = "success"
  }

}



  if (values.cardNumber.length <= 0) {
    errors.cardNumber = "error1"; // cannot be empty for Card number
  }

  if (values.cardNumber.length >= 1 && values.cardNumber.length <= 15) {
    errors.cardNumber = "error3"; // Not enough numbers for Card numbers
  }
  for (let i = 0; i < values.cardNumber.length; i++) {
    if (!digiRegex.test(values.cardNumber[i])) {
      errors.cardNumber = "error2"; // Wrong format, numbers only for Card number
    }

  
 if (values.cardNumber.length > 0
   && values.cardNumber.length >= 1 && values.cardNumber.length > 15
   && digiRegex.test(values.cardNumber[i]) 
   )
 {errors.cardNumber = "success"}
}
  

  if (values.expMM.length <= 0) {
    errors.expMM = "error1"; // cannot be empty for MM input
  }
  for (let i = 0; i < values.expMM.length; i++) {
    if (!digiRegex.test(values.expMM[i])) {
      errors.expMM = "error2"
  }

 }
 if(values.expMM.length === 2)
  { errors.expMM = "success"}

  


  if (values.expYY.length <= 0) {
    errors.expYY = "error1"; // cannot be empty for YY input
  }
  if(values.expYY.length === 2)
  { errors.expYY = "success"}



  if (values.CVC.length <= 0) {
    errors.CVC = "error1"; // cannot be empty for CVC input
  }


  if(values.CVC.length >= 1 && values.CVC.length <= 2){
    errors.CVC = "error3"
  }
  for (let i = 0; i < values.CVC.length; i++) {
    if (!digiRegex.test(values.CVC[i])) {
      errors.CVC = "error2"
  }

  if (
    values.CVC.length > 2 
    && digiRegex.test(values.CVC[i]) 
    )
  {errors.CVC = "success"}
}
 
  return errors;
};

const slicedCardNumber = ( num1, num2) =>{
const cardNumbers = formValues.cardNumber
const newString =cardNumbers.slice(num1, num2)
return newString
}


  return (
    //Credit card front display


    <div className="main-box">
      <div className="front-card">
        <img src={cardLogo} alt="card logo" className="logo-position"/>
        <div className="card-numbers">{formValues.cardNumber   ? ` ${slicedCardNumber(0,4)}  ${slicedCardNumber(4,8) }  ${slicedCardNumber(8,12)}  ${slicedCardNumber(12,16)}`: "0000 0000 0000 0000"}</div>
        <div className="flex-row space-between mobile-details">
          <div className=" mobile-card-name">{formValues.cardHolder ? formValues.cardHolder: "Jane Appleseed"}</div>
          <div className="mobile-card-date">{formValues.expMM ||  formValues.expYY?  `${formValues.expMM}/ ${formValues.expYY}`:  "00/00"}</div>
        </div>
      </div>

{/* ------------------------------------------------------------------------------ */}
{/* Credit card back display */}


      <div className="back-card">
     <div className="back-card-nr">{formValues.CVC ? formValues.CVC : "000"} </div> 
   </div>
      <img className="left-bg" src={leftPic} alt="left bg" />
      <img className="top-bg" src={topBg} alt="top bg" />
    
{/* ------------------------------------------------------------------------------ */}
{/* Cardholder name input */}
{accepts===true?
      <div className="input-box">
        <form className="input-inner" 
        onSubmit={handleSubmit}
        >
          <label className="flex-column uppercase">
            Cardholder Name
            <input
            className={
              formError.cardHolder === "error1" ? "name-input input-style-red" :
              formError.cardHolder === "error2" ? "name-input input-style-red":
              formError.cardHolder === "success" ? "name-input input-style-green": "name-input input-style"}
             
              type="text"
              placeholder="e.g. Jane Appleseed"
            maxLength="25"
            onChange={handleChange}
            value={formValues.name}
            name="cardHolder"

            />
            <div className="error-msg">
            {formError.cardHolder === "error2" ? "Can't be blank" : 
              formError.cardHolder === "error1"? "Wrong format, letters only": <div>&nbsp;</div>}
              </div>
{/* ------------------------------------------------------------------------------ */}
                            {/* Card number input */}
          </label>
          <label className="flex-column uppercase ">
            Card Number
            <input
            className={formError.cardNumber === "error1" ? "name-input input-style-red" :
            formError.cardNumber === "error2" ? "name-input input-style-red":
            formError.cardNumber === "error3" ? "name-input input-style-red":
            formError.cardNumber === "success" ? "name-input input-style-green": "name-input input-style"}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              name= "cardNumber"
              value={formValues.cardNumber}
              onChange={handleChange}
              maxLength="16"
            />
             <div className="error-msg">
              {formError.cardNumber === "error1" ? "Can't be blank" : 
              formError.cardNumber === "error2"?"Wrong format, numbers only":
              formError.cardNumber === "error3" ? "Please enter 16 digits":<div>&nbsp;</div>}
              </div>
          </label>
{/* ------------------------------------------------------------------------------ */}
                            {/* Card exp MM */}

          <div className="flex-row  gap-20">
            <label className="flex-column uppercase">
              Exp. Date (MM/YY)
              <div className="flex-row gap-5">
                <input
                  className={formError.expMM === "error1" || formError.expMM === "error2" ?"numbers-input input-style-red" :
                  formError.expMM === "success"? "numbers-input input-style-green": "numbers-input input-style" }
                  type="text"
                  placeholder="MM"
                  name="expMM"
                  onChange={handleChange}
                  value={formValues.expMM}
                  maxLength="2"
                />  
                  
{/* ------------------------------------------------------------------------------ */}
                            {/* Card exp YY */}
                <input
                 className={formError.expYY === "error1"?"numbers-input input-style-red" :
                 formError.expYY === "success"?  "numbers-input input-style-green" : "numbers-input input-style"}
                  type="text"
                  placeholder="YY"
                  name="expYY"
                  onChange={handleChange}
                  value={formValues.expYY}
                  maxLength="2"
                />
              </div>
            </label>
{/* ------------------------------------------------------------------------------ */}
                            {/* Card exp CVC */}
            <label className="flex-column uppercase">
              CVC
              <input
                className={formError.CVC === "error1" || formError.CVC === "error2" || formError.CVC === "error3"?"numbers-input width-50 input-style-red" :
                formError.CVC === "success" ? "numbers-input width-50 input-style-green": "numbers-input width-50 input-style"}
                type="text"
                placeholder="e.g. 123"
                name="CVC"
                onChange={handleChange}
                value={formValues.CVC}
                maxLength="3"
              />
            </label>
            
          </div>
        <div className="last-input-error-msg">
          <div className="error-msg-mm-yy error-msg">
                   {formError.expMM === "error1" ? "Can't be blank" : 
                   formError.expYY === "error1" ? "Can't be blank" : <div>&nbsp;</div>}
                   </div>
          <div className="error-msg-cvc error-msg">
             {formError.CVC === "error1" ? "Can't be blank" : 
             formError.CVC === "error2"? "Wrong format, numbers only" :
             formError.CVC === "error3" ? "Please enter 3 digits": <div>&nbsp;</div>}
          </div>        
        </div>
{/* ------------------------------------------------------------------------------ */}
                            {/*Submit */}
          <input
            className= "name-input submit-btn"
            type= "submit"
            value= "Submit"
          />
        </form>
        </div>
        : <div className="thank-you-box">
      <img src={successlogo} alt="card logo" width={50} />
      <h1 className="thank-you-h1" >THANK YOU!</h1>
      <p className=""> We've added your card details</p>
      <button className="submit-btn width-250">Continue</button>
       </div>}
    </div>
  );
}

export default App;

