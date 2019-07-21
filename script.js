const cards = document.querySelectorAll(".card");
let a = false;
let card1, card2;

function virarCarta() {
  this.classList.add('flip');

  if (!a) {
    a = true;
    card1 = this;
  }
  else {
    a = false;
    card2 = this;

    checarCarta()
  }
}

function checarCarta() {
  if (card1.dataset.image === card2.dataset.image) {
    card1.removeEventListener('click', virarCarta);
    card2.removeEventListener('click', virarCarta);
  }
  else {
    setTimeout(() => {
      card1.classList.remove('flip');
      card2.classList.remove('flip');
    }, 1000);
  }
}

// embaralhar cartas

(function embaralhar(){
  cards.forEach(card => {
    let random = Math.floor(Math.random()*12);
    card.style.order = random;
  });
})();

cards.forEach(card => card.addEventListener('click', virarCarta));
