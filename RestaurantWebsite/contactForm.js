/*
Name:Nate Wood
Date Created: 12/3/19
Most Recent Revision: 12/3/19
*/

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contactForm"].elements.length;
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group form-inline";
        }
    }
}

function isRequiredEmpty() {
  var hasError = false
  var hasRequired2 = false;
  for (var loopCounter = 0;
    loopCounter < document.forms["contactForm"].elements.length;
    loopCounter++) {
    var formPart = document.forms["contactForm"].elements[loopCounter];
      //If anything required as no info
      if (formPart.value == "" && formPart.className == "form-control required") {
        formPart.parentElement.className = "form-group has-error form-inline";
        //If error has not been shown yet
        if(!hasError){
          hasError=true;
          document.forms["contactForm"].elements[loopCounter].focus()
        }
      }
    }
    return hasError;
  }

function validateItems() {
  clearErrors();
  while (isRequiredEmpty()) {
    alert("A required field is empty");
    return false;
  }
  alert ("Your info has been submitted");
  return true;
}
