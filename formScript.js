console.log("formScript");

const inputFName = document.querySelector("#fname");
const inputLName = document.querySelector("#lname");
console.log(inputFName.value, inputLName.value);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputFName.value || !inputLName.value) {
    inputFName.style.border = "3px solid red";
    inputLName.style.border = "3px solid red";

    const errorDiv1 = document.createElement("div");
    errorDiv1.innerHTML = "<strong>Input field must not be empty</strong>";
    errorDiv1.style.color = "red";
    errorDiv1.classList.add('error')
    form.appendChild(errorDiv1);

    return;
  }
  const arrEvent = Array.from(e.target.elements);
  const formValues = arrEvent.map((item) => item.value);
  const inputValues = formValues.filter((item) => item != "Submit");
  console.log(inputValues);

  inputFName.value = "";
  inputLName.value = "";
  inputFName.style.border = ''
  inputLName.style.border = ''

  const errors = document.querySelectorAll('.error')
  errors.forEach(error => error.remove())
});
