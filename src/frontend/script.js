function putingImg() {
    const port = 3000
    const url = `http://localhost:${port}`;
    const route = "/movie";
    
    const box = document.getElementById("box");
    
    function requestAPI(url) {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                res.forEach(i => {
                    box.innerHTML += `
                    <div>
                        <h3>${i.title} (${i.releaseYear}) | ${i.director}</h3>
                        <img src="${i.poster}">
                    </div>`;
                })
            })
    }

    requestAPI(url + route);
}

putingImg();