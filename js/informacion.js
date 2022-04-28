var listaNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
fetch(listaNoticias)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
        for (let i = 0; i < 3; i++) {
            body += `<h3>${data[i].titulo+" - "+data[i].categoria+" - "+data[i].fecha}</h3>
            <p>${data[i].descripcion+" "}   <a href="#"> ver mas </a> </p>`
        }
        document.getElementById('l-noticias').innerHTML = body
    })

/* traemos el JSON de nuestro localStorade 
localStorage.setItem("lista", JSON.stringify(data))
var mostrarnoticias = JSON.parse(localStorage.getItem("lista"));
*/

