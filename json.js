let requisicao = new XMLHttpRequest(); // criando o obj que faz a requisição
requisicao.open("GET", 'https://api.nasa.gov/planetary/apod?api_key=ybrAVis1BdCCRmeIvbCvlIj4vuCIAgcY3d658OkH'); //abrindo req

// TRATAR OS EVENTOS ANTES DE ENVIAR A REQUISIÇÃO !!!
requisicao.onload = function() { // essa função anonima é callback 
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