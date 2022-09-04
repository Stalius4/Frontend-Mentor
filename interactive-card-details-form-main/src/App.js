import leftPic from "./images/bg-main-desktop.png"
import cardLogo from "./images/card-logo.svg"
import backCard from "./images/bg-card-back.png"
import './App.css';

function App() {
  return (
    <div className="main-box">



      <div className="front-card">
        <img src={cardLogo} alt="card logo" className="logo-position"/>
        <div className="card-numbers">0000 0000 0000 0000</div>
        <div className="flex-row space-between">
          <div>Jane Appleseed</div>
          <div>00/00</div>
        </div>
      </div>


      <div className="back-card">
     <div className="back-card-nr">000</div> 
   </div>
      <img className="left-bg" src={leftPic} alt="left bg" />
    
      <div className="input-box">
        <form className="input-inner">
          <label className="flex-column uppercase">
            Cardholder Name
            <input
              className="name-input input-style"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </label>
          <label className="flex-column uppercase ">
            Card Number
            <input
              className="name-input input-style"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>
          <div className="flex-row  gap-20">
            <label className="flex-column uppercase">
              Exp. Date (MM/YY)
              <div className="flex-row gap-5">
                <input
                  className="numbers-input input-style"
                  type="text"
                  placeholder="MM"
                />
                <input
                  className="numbers-input input-style"
                  type="text"
                  placeholder="YY"
                />
              </div>
            </label>
            <label className="flex-column uppercase">
              CVC
              <input
                className="numbers-input width-50 input-style"
                type="text"
                placeholder="e.g. 123"
              />
            </label>
          </div>
          <input
            className="name-input submit-btn "
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
      {/* <!-- Completed state start --> */}
      Thank you! We've added your card details Continue
    </div>
  );
}

export default App;
