const btn = document.querySelector(".btn");
const numA = document.querySelector("#numeroA");
const numB = document.querySelector("#numeroB");

const spam = document.querySelector(".msg");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let numeroA = numA.value;

  let numeroB = numB.value;

  if (numeroB > numeroA) {
    spam.textContent = "Valores corretos";
    numA.value = 0;
    numB.value = 0;
  } else {
    spam.textContent = "Valores incorretos,digite novamente";
  }
});
