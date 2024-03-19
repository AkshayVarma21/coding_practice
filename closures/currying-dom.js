// One of the usecase of currying where we are manipulating the dom

const updatedElement = id => content => document.querySelector(`#${id}`).textContent = content;

const updatedId = updatedElement("heading")
updatedId("Hi, This is Akshay")
updatedId("Test code")