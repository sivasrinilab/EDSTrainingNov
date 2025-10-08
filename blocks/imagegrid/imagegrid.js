// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
 // Create a new input element
  const inputElement = document.createElement('button');


  inputElement.setAttribute('id', 'one');
  
  // Find an existing element in the DOM where you want to append the input
  // For example, append it to the body or a specific div
  const targetElement = document.querySelector('.row');

  // Append the newly created input element to the target element
  targetElement.prepend(inputElement);
inputElement.addEventListener('click', one);

const twoElem = document.createElement('button');
  twoElem.setAttribute('id', 'two');  

  // Append the newly created input element to the target element
  targetElement.prepend(twoElem);
twoElem.addEventListener('click', two);

const fourElem = document.createElement('button');
  fourElem.setAttribute('id', 'four');  

  // Append the newly created input element to the target element
  targetElement.prepend(fourElem);
twoElem.addEventListener('click', four);
  console.log('Input element created and appended to the DOM.');
