import "./styles.css";
import { ReportValidation } from "./ValidationHelper.js";

const btn = document.querySelector("button");
const form = document.querySelector("form");

const formInputs = ["email", "country", "postal", "pwd", "pwd-confirm"];

const submitDetails = document.createElement("div");
document.querySelector("body").append(submitDetails);
for (let i = 0; i < formInputs.length; i++) {
    submitDetails.append(document.createElement("p"));
}


function renderSubmitDetails() {
    let i = 0;
    submitDetails.setAttribute("style", "padding: 12px; margin: auto; margin-top: 2vh; border: 1px solid black");
    formInputs.forEach(inp => {
        submitDetails.childNodes[i].textContent = `${inp}: ${form[inp].value}`;
        submitDetails.childNodes[i].setAttribute("style", "padding: 4px 12px")
        i += 1;
    })
}

function unrenderSubmitDetails() {
    let i = 0;
    submitDetails.setAttribute("style", "");
    formInputs.forEach(() => {
        submitDetails.childNodes[i].textContent = "";
        submitDetails.childNodes[i].setAttribute("style", "");
        i += 1;
    })
}

function clearForm() {
    formInputs.forEach(inp => {
        if (inp != "country")
        form[`${inp}`].value = ""
    });
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    unrenderSubmitDetails();

    ReportValidation.email(form);
    ReportValidation.postal(form);
    ReportValidation.pwd(form)
    ReportValidation.pwdConfirm(form)

    if (form.checkValidity()) {
        renderSubmitDetails();
        clearForm();
    }
});

form.email.addEventListener("blur", () => {
    ReportValidation.email(form)
})

form.postal.addEventListener("blur", () => {
    ReportValidation.postal(form)
})

form.pwd.addEventListener("blur", () => {
    ReportValidation.pwd(form)
})

form['pwd-confirm'].addEventListener("blur", () => {
    ReportValidation.pwdConfirm(form)
})