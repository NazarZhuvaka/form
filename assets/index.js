const btn = document.querySelector(".form-btn");
const form = document.querySelector("#myform");

form.addEventListener("submit", sumbitHandler);


// <------------------------- Цікаво чи правильно виконав завдання із зірочкою. Чи є кращий спосіб ------------------------------>

function sumbitHandler(e) {
  e.preventDefault();
  const { target } = e;

  const firstName = target
    .querySelector('input[name="first-name"]')
    .value.trim();
  const lastName = target.querySelector('input[name="last-name"]').value.trim();
  const email = target.querySelector('input[name="email"]').value.trim();

  const phoneInputs = target.querySelectorAll('input[name="phone"]');
  const phone = "+" +  Array.from(phoneInputs)
    .map((input) => input.value.trim())
    .join("");

  const subject = target.querySelector('select[name="select"]').value;

  const textarea = target.querySelector("textarea");
  let message = textarea.value;
  message = message.trim().replace(/\s+/g, " ");

  const data = {
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone,
    subject,
    message,
  };

  console.log(data);
  return data
}
