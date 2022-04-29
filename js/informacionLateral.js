var noticiasTecnologia ="https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
fetch(noticiasTecnologia)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let body = "";
        for (let i = 0; i < 3; i++) {
            if (localStorage.getItem("pathname") != window.location.pathname) {
                body += `<p> <a href="../html/pageNoticia.html"> ${data[i].titulo} </a> </p>`;
            } else {
                body += `<p> <a href="html/pageNoticia.html"> ${data[i].titulo} </a> </p>`;
            }
        }
        document.getElementById("b-tecnologia").innerHTML = body;
    });


    var noticiasDeporte = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";
fetch(noticiasDeporte)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let body = "";
        for (let i = 0; i < 3; i++) {
            if (localStorage.getItem("pathname") != window.location.pathname) {
                body += `<p> <a href="../html/pageNoticia.html"> ${data[i].titulo} </a> </p>`;
            } else {
                body += `<p> <a href="html/pageNoticia.html"> ${data[i].titulo} </a> </p>`;
            }
        }
        document.getElementById("b-deportes").innerHTML = body;
    });