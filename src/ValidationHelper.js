const AddValidation = (() => {
  const email = (form) => {
    const re = /\S+@\S+\.\S+/;
    if (!/\S+/.test(form.email.value)) {
      form.email.setCustomValidity("email can't be empty!");
    } else if (!re.test(form.email.value)) {
      form.email.setCustomValidity("Input must be an email");
    } else {
      form.email.setCustomValidity("");
    }
  };

  const postal = (form) => {
    let re = /placeholder/;
    let postalRange = "";
    if (form.country.value == "ph") {
      re = /^((0[4-9]\d{2})|([1-8]\d{3})|(9[0-7]\d{2})|(98(0\d|1[0-4])))$/;
      postalRange = "(0400 - 9814)";
    } else if (form.country.value == "ch") {
      re = /^([1-9]\d\d\d)$/;
      postalRange = "(1000 - 9999)";
    } else if (form.country.value == "fr") {
      re = /^((0[1-9]\d{3})|([1-8]\d{4})|(9[0-7]\d{3})|(98[0-8]\d{2}))$/;
      postalRange = "(01000 - 98899)";
    }

    if (!/\S+/.test(form.postal.value)) {
      form.postal.setCustomValidity("Postal code can't be empty!");
    } else if (!re.test(form.postal.value)) {
      form.postal.setCustomValidity(`Invalid postal code! ${postalRange}`);
    } else {
      form.postal.setCustomValidity("");
    }
  };

  const pwd = (form) => {
    const re = /.{3,}/;
    if (!/\S+/.test(form.pwd.value))
      form.pwd.setCustomValidity("Password can't be empty!");
    else if (!re.test(form.pwd.value))
      form.pwd.setCustomValidity("Password must be at least 3 characters!");
    else form.pwd.setCustomValidity("");
  };

  const pwdConfirm = (form) => {
    const re = /\S+/;
    if (!re.test(form["pwd-confirm"].value))
      form["pwd-confirm"].setCustomValidity("Confirm Password can't be empty!");
    else if (form["pwd-confirm"].value != form.pwd.value)
      form["pwd-confirm"].setCustomValidity("Passwords do not match!");
    else form["pwd-confirm"].setCustomValidity("");
  };
  return { email, postal, pwd, pwdConfirm };
})();

const ReportValidation = (() => {
  const email = (form) => {
    AddValidation.email(form);
    document.querySelector(`#email + span`).textContent =
      form.email.validationMessage;
    if (/^$/.test(form.email.validationMessage)) {
      form.email.setAttribute("class", "valid");
    } else {
      form.email.setAttribute("class", "");
    }
  };
  const postal = (form) => {
    AddValidation.postal(form);
    document.querySelector(`#postal + span`).textContent =
      form.postal.validationMessage;
    if (/^$/.test(form.postal.validationMessage)) {
      form.postal.setAttribute("class", "valid");
    } else {
      form.postal.setAttribute("class", "");
    }
  };

  const pwd = (form) => {
    AddValidation.pwd(form);
    document.querySelector(`#pwd + span`).textContent =
      form.pwd.validationMessage;
    if (/^$/.test(form.pwd.validationMessage)) {
      form.pwd.setAttribute("class", "valid");
    } else {
      form.pwd.setAttribute("class", "");
    }
  };

  const pwdConfirm = (form) => {
    AddValidation.pwdConfirm(form);
    document.querySelector(`#pwd-confirm + span`).textContent =
      form["pwd-confirm"].validationMessage;
    if (/^$/.test(form["pwd-confirm"].validationMessage)) {
      form["pwd-confirm"].setAttribute("class", "valid");
    } else {
      form["pwd-confirm"].setAttribute("class", "");
    }
  };
  return { email, postal, pwd, pwdConfirm };
})();

export { ReportValidation };
