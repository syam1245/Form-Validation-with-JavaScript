// const submit = document.getElementById("submit");

// submit.addEventListener("click", validate);

// function validate(e) {
//   e.preventDefault();

//   const firstNameField = document.getElementById("firstname");
//   let valid = true;

//   if (!firstNameField.value) {
//     const nameError = document.getElementById("nameError");
//     nameError.classList.add("visible");
//     firstNameField.classList.add("invalid");
//     // nameError.setAttribute("aria-hidden", false);
//     // nameError.setAttribute("aria-invalid", true);
//   }
//   return valid;
// }


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var firstNameInput = document.getElementById("firstname");
  var nameError = document.getElementById("nameError");
  var ageInput = document.getElementById("age");
  var ageError = document.getElementById("ageError");

  if (firstNameInput.value.trim() === "") {
    nameError.style.display = "block";
    firstNameInput.style.borderColor = "red";
  } else {
    nameError.style.display = "none";
    firstNameInput.style.borderColor = "";
  }

  if (ageInput.value.trim() === "") {
    ageError.style.display = "block";
    ageInput.style.borderColor = "red";
  } else {
    ageError.style.display = "none";
    ageInput.style.borderColor = "";
  }
});
