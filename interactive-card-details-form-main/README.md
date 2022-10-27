

# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](/images/Credit-card-form.png)



### Links

- Live Site URL: [Add live site URL here](https://bejewelled-pie-231382.netlify.app/)

## My process

I decided to complete all Frontend mentor challenges  with junior difficulty. This is my first challenge. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library




### What I learned
Set input value on submit with name="firstname" and use it on submit function event.target.first_name.value
```js
const App = () => {
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();

    // 👇️ access input values using name prop
    console.log('first 👉️', event.target.first_name.value);
    console.log('second 👉️', event.target.last_name.value);

    // 👇️ clear all input values in the form
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
        />
        <input
          id="last_name"
          name="last_name"
          type="text"
        />

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default App;
```


Active input with linear-gradient
```css
input[type=text]:focus {
  background: 
  linear-gradient(rgb(255, 254, 254) 0 0) padding-box, 
  linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) border-box;
color: #313149;
border: 1.5px solid transparent;
border-radius: 7px;
display: inline-block;
outline: none;

}
```




### Useful resources

- CSS Grid guide [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- CSS Box-shadow- examples [Get CSS Scan](https://getcssscan.com/css-box-shadow-examples)


## Author


- Frontend Mentor - [@Stalius4](https://www.frontendmentor.io/profile/yourusername)
- Linkedin - [Deivydas Rimgaila](https://www.linkedin.com/in/deivydas-rimgaila-8aa787218/)






