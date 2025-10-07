const elem = document.querySelectorAll('.stickysocialbar ul li');



 // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < elem.length; i++) {
   let  a = elem[i].getElementsByTagName("a")[0];
   let txtValue = a.textContent || a.innerText;
     // Create a new input element
  const inputElement = document.createElement('i');
    inputElement.setAttribute('class', 'fa fa-'+txtValue);
 a.append(inputElement);
  }

