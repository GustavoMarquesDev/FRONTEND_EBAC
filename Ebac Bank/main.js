const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEvalido = false;

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2; /*cortando o nome completo para validar*/
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); /*função para a pagina não atualizar sempre que entrar os dados*/

  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de: <b>${valorDeposito.value}<b> depositado para o cliente: </b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
  formEvalido = validaNome(nomeBeneficiario.value);
  if (formEvalido) {
    const containerMensagemSucesso = document.querySelector(".seccess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDeposito.value = "";
  } else {
    nomeBeneficiario.style.border =
      "1px solid red"; /*Usado para a borda do formulario invalido ficar vermelha*/
    document.querySelector(".error-message").style.display =
      "block"; /*elemento usado para aparecer a mensagem de erro quando a condição for falsa*/
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formEvalido = validaNome(e.target.value);
  if (!formEvalido) {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  } else {
    nomeBeneficiario.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});
