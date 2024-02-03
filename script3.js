let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Envoi du formulaire détecté !");

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 1) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ prénom doit être rempli";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let nom = document.querySelector("#nom");

  if (nom.value.length < 1) {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ prénom doit être rempli";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let email = document.querySelector("#email");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }
  let axe = document.querySelector("#axe");

  if (axe.value == "") {
    errorContainer.classList.add("visible");
    axe.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ axe doit être choisis";

    errorList.appendChild(err);
  } else {
    axe.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    nom.classList.contains("success") &&
    axe.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});