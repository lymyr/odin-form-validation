const formInputs = ["email", "country", "postal", "pwd", "pwd-confirm"];

const submitDetails = document.createElement("div");
document.querySelector("body").append(submitDetails);
for (let i = 0; i < formInputs.length; i++) {
  submitDetails.append(document.createElement("p"));
}

const Render = (() => {
  const formDetails = (form) => {
    let i = 0;
    submitDetails.setAttribute(
      "style",
      "padding: 12px; margin: auto; margin-top: 2vh; border: 1px solid black",
    );
    formInputs.forEach((inp) => {
      submitDetails.childNodes[i].textContent = `${inp}: ${form[inp].value}`;
      submitDetails.childNodes[i].setAttribute("style", "padding: 4px 12px");
      i += 1;
    });
  };

  const remFormDetails = () => {
    let i = 0;
    submitDetails.setAttribute("style", "");
    formInputs.forEach(() => {
      submitDetails.childNodes[i].textContent = "";
      submitDetails.childNodes[i].setAttribute("style", "");
      i += 1;
    });
  };

  const clearForm = (form) => {
    formInputs.forEach((inp) => {
      if (inp != "country") {
        form[`${inp}`].value = "";
        form[`${inp}`].setAttribute("class", "");
      }
    });
  };

  return { formDetails, remFormDetails, clearForm };
})();

export { Render };
