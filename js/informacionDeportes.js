var listaNoticiasdeportes = 'https://carlosreneas.github.io/endpoints/categoria_deporte.json';
fetch(listaNoticiasdeportes)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
        for (let i = 0; i <data.length; i++) {
            body += `<h3> ${data[i].titulo}</h3>
            <p>${data[i].categoria} </p>`
        }
        document.getElementById('l-noticiasdeportes').innerHTML = body
    })