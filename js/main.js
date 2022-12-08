const tenis = [
    {
        nome: 'Adidas Preto',
        preco:"149,99",
        id: "img-1"
    },
    {
        nome: 'Nike preto + colorido',
        preco:"154,90",
        id: "img-2"
    },
    {
        nome: 'Nike branco',
        preco:"279,90",
        id: "img-3"
    },
    {
        nome: 'All Star',
        preco:"129,90",
        id: "img-4"
    },
    {
        nome: 'Low Air Jordan',
        preco:"388,88",
        id: "img-5"
    },
    {
        nome: 'New Balance',
        preco:"321,05",
        id: "img-6"
    }
];


const cardTemplate = function(modelo){
    return `<div class="card">
    <div class="product-image" id="${modelo.id}"></div>
        <h3 class="nomeDoProduto">${modelo.nome}</h3>
        <p>Este tênis é muito bom por ser...</p>
        <p>R$ <span class="bold">${modelo.preco}</span></p>
            <a href="#" class="btn">Comprar</a>
</div>`
};

function renderiza() {
    const tela = document.querySelector(".products-container");
    tela.innerHTML = tenis.map((modelo) => {
        return cardTemplate(modelo);
    }).join("");
}

function carregarImagens(){
    for(var i= 1; i <= tenis.length; i++){      
      document.getElementById(`img-${i}`).style.backgroundImage = `url(../assets/tenis${i}.jpg)`
    } 
  } 
renderiza();
carregarImagens();