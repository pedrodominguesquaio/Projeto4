function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
} let palavra;
function setup ( ) {
  createcanvas(1000,800);
  palavra= palavraAleatoria();
  {
    function palavraAleatoria() {
      let palavras=["harry potter", "crepusculo", "gossip girl"];
      return random(palavras);
      function inicializacores() {
        background(violet);
        fill(lightblue);
        textsize(64);
        textAlign(CENTER,CENTER);
        function draw() {
          inicializacores()
          let maximo=width
          
          let minimo=0;;
          let quantidade=map(mouseX,0,width,1,palavra.length);
          let parcial=palavra.substring(0,quantidade);
          texto(parcial,500,400);
}
