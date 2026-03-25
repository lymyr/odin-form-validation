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

form.email.addEventListener("input", () => {
  ReportValidation.email(form);
});

form.country.addEventListener("input", () => {
  if (!/^$/.test(form["postal"].value)) {
    ReportValidation.postal(form);
  }
});

form.postal.addEventListener("input", () => {
  ReportValidation.postal(form);
});

form.pwd.addEventListener("input", () => {
  ReportValidation.pwd(form);
  if (!/^$/.test(form["pwd-confirm"].value)) {
    ReportValidation.pwdConfirm(form);
  }
});

form["pwd-confirm"].addEventListener("input", () => {
  ReportValidation.pwdConfirm(form);
  if (!/^$/.test(form["pwd"].value)) {
    ReportValidation.pwdConfirm(form);
  }
});
