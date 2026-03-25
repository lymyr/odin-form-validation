import "./styles.css";
import { ReportValidation } from "./ValidationHelper.js";
import { Render } from "./RenderHelper.js";

const btn = document.querySelector("button");
const form = document.querySelector("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  Render.remFormDetails();

  ReportValidation.email(form);
  ReportValidation.postal(form);
  ReportValidation.pwd(form);
  ReportValidation.pwdConfirm(form);

  if (form.checkValidity()) {
    Render.formDetails(form);
    Render.clearForm(form);
  }
});

form.email.addEventListener("keyup", () => {
  ReportValidation.email(form);
});

form.postal.addEventListener("keyup", () => {
  ReportValidation.postal(form);
  form.country.addEventListener("change", () => {
    ReportValidation.postal(form);
  });
});

form.pwd.addEventListener("keyup", () => {
  ReportValidation.pwd(form);
});

form["pwd-confirm"].addEventListener("keyup", () => {
  ReportValidation.pwdConfirm(form);
});