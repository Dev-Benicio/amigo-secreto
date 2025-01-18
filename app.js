//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let condicao = true;
let repeteSorteio = false;


function adicionarAmigo() {
  if (condicao) {
    const novoAmigo = document.querySelector("#amigo").value;

    if (novoAmigo.trim() !== '') {
      amigos.push(novoAmigo);
      document.querySelector("#amigo").value = "";
      exibirLista();
    } else {
      alert("Por favor, insira um nome.");
    }
  } else {
    alert("Não é possível adicionar mais amigos, o sorteio já foi realizado!");
  }
}

function exibirLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function limpaLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear!");
    return;
  }

  const resultado = document.getElementById('resultado');
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  limpaLista();
  resultado.innerHTML = `<li>🎉 ${amigoSorteado} foi sorteado(a)!</li>`;


  if (condicao) {
    proibeNovoSorteio();
    condicao = false;
  } else {
    alert('O Sorteio já realizado! 😔');
  }
}

function proibeNovoSorteio() {
  repeteSorteio = true;
}
