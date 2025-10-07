function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

  // Create a new input element
  const inputElement = document.createElement('input');

  // Set attributes for the input element
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('id', 'myInput');
  inputElement.setAttribute('placeholder', 'Search for names..');

  // Find an existing element in the DOM where you want to append the input
  // For example, append it to the body or a specific div
  const targetElement = document.querySelector('.filter');

  // Append the newly created input element to the target element
  targetElement.appendChild(inputElement);
inputElement.addEventListener('keyUp', myFunction);
  console.log('Input element created and appended to the DOM.');

