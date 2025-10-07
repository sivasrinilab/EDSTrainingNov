const elem = document.querySelector('.stickysocialbar');
const ulelem = elem.closest('ul')
li = ulelem.getElementsByTagName('li');
 // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
     // Create a new input element
  const inputElement = document.createElement('i');
    inputElement.setAttribute('class', 'fa fa-'+txtValue);
 a.append(inputElement);
  }

