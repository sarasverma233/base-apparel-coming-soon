const form = document.querySelector(".emailForm");
const email = document.querySelector("#email");
const warning = document.querySelector(".warning");

document.querySelector("#btn").addEventListener("click", function (e) {
  e.preventDefault();
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(emailFormat)) {
    form.submit();
  } else {
    warning.innerText = "Please provide a valid email";
    email.classList.add("error");

    setTimeout(() => {
      warning.innerText = "";
      email.classList.remove("error");
    }, 2000);
  }
});
