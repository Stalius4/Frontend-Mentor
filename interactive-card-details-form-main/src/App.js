import leftPic from "./images/bg-main-desktop.png"
import './App.css';

function App() {
  return (

<div className="main-box">
  <img className="left-bg" src={leftPic} alt="left bg" />
0000 0000 0000 0000
Jane Appleseed
00/00

000

<div className="input-box">
<form className="input-inner" >
        <label className="flex-column">
          Cardholder Name
          <input className="name-input" type="text"  placeholder="e.g. Jane Appleseed" />
        </label>
        <label className="flex-column">
        Card Number
          <input className="name-input" type="text"  placeholder="e.g. 1234 5678 9123 0000" />
        </label>
       <div className="flex-row">
        <label className="flex-column ">
        Exp. Date (MM/YY)
        <div className="flex-row">
          <input className="numbers-input" type="text"  placeholder="MM" />
          <input className="numbers-input" type="text"  placeholder="YY" />
        </div>
        </label>
        <label className="flex-column">
        CVC
          <input className="numbers-input" type="text"  placeholder="e.g. 123" />
        </label>
        </div>
        <input className="name-input" type="submit" value="Confirm" />
      </form>
 













</div>
{/* <!-- Completed state start --> */}

Thank you!
We've added your card details
Continue

</div>

  );
}

export default App;
