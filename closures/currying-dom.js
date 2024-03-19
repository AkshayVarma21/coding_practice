// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
// It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).


// One of the usecase of currying where we are manipulating the dom

const updatedElement = id => content => document.querySelector(`#${id}`).textContent = content;

const updatedId = updatedElement("heading")
updatedId("Hi, This is Akshay")
updatedId("Test code")