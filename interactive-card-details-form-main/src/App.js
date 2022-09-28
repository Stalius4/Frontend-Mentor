import leftPic from "./images/bg-main-desktop.png"
import cardLogo from "./images/card-logo.svg"
import successlogo from "./images/icon-complete.svg"
import {createUser} from "./utils/utils.js"
import './App.css';
import React, {useState} from "react";
function App() {
const initialValue = {cardHolder:"",cardNumber:"", expMM:"", expYY:"", CVC:""}
const [formValues, setFormValues] = useState(initialValue)
const [formError, setFormError] = useState({})
const [dbError, setDbError] = useState({
  card_holder:"",
})

const success = false


const handleChange = (e) => {
  const { name, value} = e.target
  setFormValues({...formValues, [name]:value})
  console.log(formValues)
}

const handleSubmit =(event) =>{
  event.preventDefault();
  console.log("pirmas", formError)
setFormError(validation(formValues))
if(Object.keys(formError).length === 0){ //check if object is empty
  createUser(formValues.cardHolder, formValues.cardNumber, formValues.expMM, formValues.expYY, formValues.CVC, setDbError, dbError)
console.log("labas", formError)
}

}

const validation = (values) => {
  const digiRegex = /^[0-9]*$/
  const errors = {}
    for(let i = 0; i< values.cardHolder.length; i++){
        if (digiRegex.test(values.cardHolder[i]))  {
          errors.cardHolder= "error1" //Wrong format, letters only for Cardholders name"
        }
        
      } if(values.cardHolder.length<=0){
        errors.cardHolder= "error2" // cannot be empty for Cardholders name
      }
    if(values.cardNumber.length<=0){
      errors.cardNumber= "error1" // cannot be empty for Card number
    } 
    for(let i = 0; i< values.cardNumber.length; i++){
      if (!digiRegex.test(values.cardNumber[i]))  {
        errors.cardNumber= "error2" // Wrong format, numbers only for Card number
      }}
      if(values.cardNumber.length > 0 && values.cardNumber.length <= 15){
        errors.cardNumber= "error3" // Not enough numbers for Card numbers
      }    if(values.expMM.length <= 0 ){
        errors.expMM= "error1" // cannot be empty for MM input
      }    if(values.expYY.length <= 0 ){
        errors.expYY= "error1" // cannot be empty for YY input
      }    if(values.CVC.length <= 0 ){
        errors.CVC= "error1" // cannot be empty for CVC input
      }
      return errors
}

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
        <div className="card-numbers">{formValues.cardNumber  && !formError.cardNumber  ? ` ${slicedCardNumber(0,4)}  ${slicedCardNumber(4,8) }  ${slicedCardNumber(8,12)}  ${slicedCardNumber(12,16)}`: "0000 0000 0000 000"}</div>
        <div className="flex-row space-between">
          <div>{formValues.cardHolder && !formError.cardHolder? formValues.cardHolder: "Jane Appleseed"}</div>
          <div>{formValues.expMM &&  formValues.expYY?  `${formValues.expMM}/ ${formValues.expYY}`:  "00/00"}</div>
        </div>
      </div>

{/* ------------------------------------------------------------------------------ */}
{/* Credit card back display */}


      <div className="back-card">
     <div className="back-card-nr">{formValues.CVC && !formError.CVC? formValues.CVC: "000"}</div> 
   </div>
      <img className="left-bg" src={leftPic} alt="left bg" />
    
{/* ------------------------------------------------------------------------------ */}
{/* Cardholder name input */}
{success ?
      <div className="input-box">
        <form className="input-inner" 
        onSubmit={handleSubmit}
        >
          <label className="flex-column uppercase">
            Cardholder Name
            <input
              className={formError.cardHolder ? "name-input input-style-red" : "name-input input-style"}
              
              type="text"
              placeholder="e.g. Jane Appleseed"
            maxLength="25"
            onChange={handleChange}
            value={formValues.name}
            name="cardHolder"

            />
            <div className="error-msg">
            {formError.cardHolder === "error2" ? "Can't be blank" : 
              formError.cardHolder === "error1"? "Wrong format, letters only":
              dbError.card_holder ? `Card holders name ${dbError.card_holder} already exist` : <div>&nbsp;</div>}
              </div>
{/* ------------------------------------------------------------------------------ */}
                            {/* Card number input */}
          </label>
          <label className="flex-column uppercase ">
            Card Number
            <input
            
            className={formError.cardNumber ? "name-input input-style-red" : "name-input input-style"}
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
                  className={formError.expMM ?"numbers-input input-style-red" : "numbers-input input-style"}
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
                 className={formError.expYY ?"numbers-input input-style-red" : "numbers-input input-style"}
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
                className={formError.CVC ?"numbers-input width-50 input-style-red" :"numbers-input width-50 input-style"}
                type="text"
                placeholder="e.g. 123"
                name="CVC"
                onChange={handleChange}
                value={formValues.CVC}
                maxLength="3"
              />
            </label>
            
          </div>
        <div className="flex-row gap-80">
          <div className="error-msg ">
                   {formError.expMM === "error1" ? "Can't be blank" : 
                   formError.expYY === "error1" ? "Can't be blank" : <div>&nbsp;</div>}
                   </div>
          <div className="error-msg ">
             {formError.CVC === "error1" ? "Can't be blank" :  <div>&nbsp;</div>}
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
 
    
     
      : <div>
      <img src={successlogo} alt="card logo" />
      <h1>Thank you!</h1>
      <p> We've added your card details</p>
      <button className="submit-btn">Continue</button>
       </div>}
    </div>
  );
}

export default App;

