// Array contendo pares de emojis para o jogo da memória
const emojis = ["🦀","🦀","🦆","🦆","🦜","🦜","🦩","🦩","🦉","🦉","🐧","🐧","🦋","🦋","🐞","🐞"];
// Array que armazenará as cartas abertas (selecionadas pelo jogador)
let openCards = [];

// Embaralha os emojis aleatoriamente para exibir uma nova ordem a cada jogo
let randomEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

// Loop que cria os elementos de cada carta do jogo
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div'); // Cria um elemento <div> para cada carta
  box.className = 'item'; // Define a classe para estilização
  box.innerHTML = randomEmojis[i]; // Insere um emoji aleatório na carta
  box.onclick = handleClick; // Associa o evento de clique à função de manipulação
  document.querySelector('.game').appendChild(box); // Adiciona a carta ao container do jogo
}

// Função chamada quando uma carta é clicada
function handleClick() {
  // Verifica se há menos de duas cartas abertas
  if (openCards.length < 2) {
    this.classList.add('boxOpen'); // Adiciona a classe para mostrar a carta
    openCards.push(this); // Adiciona a carta ao array de cartas abertas
  }

  // Se duas cartas estão abertas, verifica se são iguais após um pequeno intervalo
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

// Função que verifica se as duas cartas abertas são iguais
function checkMatch() {
  // Se as cartas combinam, adiciona uma classe de correspondência para mantê-las abertas
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    // Se as cartas não combinam, remove a classe de exibição
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }

  // Limpa o array de cartas abertas para permitir novas seleções
  openCards = [];
}