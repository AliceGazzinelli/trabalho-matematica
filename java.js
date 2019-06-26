let botaoEl = document.querySelector ('#botao');

function resolva (){
  let valoraEl = document.querySelector('#coeficiente-a');
  let valorbEl = document.querySelector('#coeficiente-b');
  let valorcEl = document.querySelector('#coeficiente-c');
  let deltaEl = document.querySelector('#resultado-delta');
  let x1El = document.querySelector('#resultado-x1');
  let x2El = document.querySelector('#resultado-x2');
  let valorEixoEl = document.querySelector('#eixo-yvalor');
  let ramoEixoEl =  document.querySelector('#eixo-yramo');
  let raizesEl = document.querySelector('#quant-raizes');
  let concavEl = document.querySelector('#resp-concav');
  let vertxEl = document.querySelector('#resultado-verticex');
  let vertyEl = document.querySelector('#resultado-verticey');
  let somaEl = document.querySelector('#resultado-soma')
  let produtoEl = document.querySelector('#resultado-produto');

  let a = valoraEl.value;
  let b = valorbEl.value;
  let c = valorcEl.value;

  if(a == 0){
    window.alert('Não é possível calcular.');
    return 1;
  }
  else{
    let delta = b*b - 4*a*c;
    let x1 = null;
    let x2 = null;
    let eixo = c;
    let ramo = null;
    let raizes = null;
    let conc = null;
    let vx = (b*-1) / 2*a;
    let vy = (delta * -1) / 4*a;
    let soma = (b*-1)/a;
    let produto = c/a;

    if (delta >= 0) {
      x1 = (b*-1 + Math.sqrt(delta)) / 2*a;
      x2 = (b*-1 - Math.sqrt(delta)) / 2*a;
    }
    else {
      x1 = '';
      x2 = '';
    }

    if(delta > 0){
      raizes = 2;
    }
    else if (delta == 0) {
      raizes = 1;
      x2 = '';
    }

    if(a > 0){
      conc = 'p/ cima';
    }
    else {
      conc = 'p/ baixo';
    }

    if(b > 0){
      ramo = 'crescente';
    }
    else if(b == 0){
      ramo = 'vertice';
    }
    else {
      ramo = 'decrescente';
    }



    deltaEl.value = delta;
    x1El.value = x1;
    x2El.value = x2;
    valorEixoEl.value = eixo;
    ramoEixoEl.value = ramo;
    raizesEl.value = raizes;
    concavEl. value = conc;
    vertxEl.value = vx;
    vertyEl.value = vy;
    somaEl.value = soma;
    produtoEl.value = produto;
  }
}

botaoEl.addEventListener('click', resolva);
