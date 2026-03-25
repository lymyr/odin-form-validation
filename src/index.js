import "./styles.css";
import { ReportValidation } from "./ValidationHelper.js";
import { Render } from "./RenderHelper.js";

const btn = document.querySelector("button");
const form = document.querySelector("form");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    Render.remFormDetails();

    ReportValidation.email(form);
    ReportValidation.postal(form);
    ReportValidation.pwd(form)
    ReportValidation.pwdConfirm(form)

    if (form.checkValidity()) {
        Render.formDetails(form);
        Render.clearForm(form);
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