var mostrarNoticia = 'https://carlosreneas.github.io/endpoints/noticia_1.json';
fetch(mostrarNoticia)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
            body += `<h3>${data.titulo}</h3>
            <p>${data.detalle}</p>`
        document.getElementById('l-noticias').innerHTML = body
    })