let requisicao = new XMLHttpRequest();
requisicao.open("GET", "https://api.nasa.gov/planetary/apod?api_key=ybrAVis1BdCCRmeIvbCvlIj4vuCIAgcY3d658OkH");

requisicao.onload = function() {
    if (this.status == 200) {

        let objeto = JSON.parse(requisicao.responseText);
        console.log(objeto);

        let data = document.getElementById('data');
        data.textContent = objeto.date;

        let imagem = document.getElementById('imagem');
        imagem.src = objeto.url;

        let rodape = document.getElementById('rodape');
        rodape.textContent = ` Image Credit & ${objeto.copyright}`;

        let descricao = document.getElementById('descricao');
        descricao.textContent = objeto.explanation;

    }

}

requisicao.send();