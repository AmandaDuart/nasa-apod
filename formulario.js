let datinha = document.getElementById("datinha");
let buttondata = document.getElementById("buttondata");

buttondata.addEventListener("click", function() {

    let formrequisicao = new XMLHttpRequest();
    newrequi = "https://api.nasa.gov/planetary/apod?api_key=ybrAVis1BdCCRmeIvbCvlIj4vuCIAgcY3d658OkH&date=" + datinha.value;
    formrequisicao.open("GET", newrequi);

    formrequisicao.addEventListener("load", function(event) {
        let objeto = JSON.parse(formrequisicao.responseText);

        let data = document.getElementById('data');
        data.textContent = `Data  ${objeto.date}`;

        let imagem = document.getElementById('imagem');
        imagem.src = objeto.url;

        let rodape = document.getElementById('rodape');
        rodape.textContent = ` Image Credit & ${objeto.copyright}`;

        let descricao = document.getElementById('descricao');
        descricao.textContent = objeto.explanation;

        event.preventDefault();

    });
    formrequisicao.send();
});