const cadastro = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

function caixaAlta(objeto) {
  for (let index in objeto) {
    objeto[index] = objeto[index].toUpperCase();
  }
  return objeto;
}
console.log(caixaAlta(cadastro));

function textoCorrido(objeto) {
  let texto = "";
  for (let index in objeto) {
    texto = texto + `${objeto[index]} `;
  }
  return texto;
}
console.log(textoCorrido(cadastro));

function objetoCallback(objeto, funcao) {
  console.log(funcao(objeto));
}

objetoCallback(cadastro, caixaAlta);
objetoCallback(cadastro, textoCorrido);
