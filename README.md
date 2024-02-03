<h1 align="center"> CineBelArt API </h1>

## 🛸 O Projeto
<img height="200" src="2" alt="gif" />

<blockquote>Informações de filmes na sua mão para você enlouquecer pelo cinema!</blockquote>

Neste projeto foi desenvolvido pensando nas pessoas que amam cinema e desejam utilizar informações sobre filmes para desenvolver um site, por exemplo, que iluminem os olhos de quem vê. Estudando sobre API, Node.js e Banco de dados, aqui construou esta API, CineBelArt. Aqui tem uma pitada do cinema, venha ver!

## API Endpoints

### 📽️ Get All Movies
- Endpoint: `/movie`
- Method: `Get`
- Description: retorna a lista com todos os filmes

<details>
<summary>Este é um exemplo de resposta</summary>
	
```json
{
    "moviesList": [
        {
        "id": 1,
        "title": "La La Land",
        "director": "Damien Chazelle",
        "releaseYear": 2017,
        "poster": "https://photos.app.goo.gl/MMHVDmUTkjbWBCJz8"
        }
    ]
}
```
</details>

### 📽️ Get a specific movie
- Endpoint: `/movie/:id`
- Method: `Get`
- Description: retorna um filme específico

<details>
<summary>Este é um exemplo de resposta</summary>
	
```json
{
     "id": 1,
     "title": "La La Land",
     "director": "Damien Chazelle",
     "releaseYear": 2017,
     "poster": "https://photos.app.goo.gl/MMHVDmUTkjbWBCJz8"
}
```
</details>

<!-- ## 📌 Como ver

O projeto está hospedado no Vercel:
[Maya IA - Landing Page](https://maya-ia.vercel.app/) -->

## 👨‍👩‍👧‍👦 Contributing
Se você gostaria de contribuir para o desenvolvimento da CineBelArt API, por favor abra uma issue ou submit uma pull request.


- Para realizar um clone raso, reduzirá a quantidade de histórico baixado.
```javascript
git clone --depth 1 https://github.com/Talyslan/Maya-Landing-Page.git
```

- Para realizar um clone comum.
```javascript
git clone https://github.com/Talyslan/Maya-Landing-Page.git
```

## 🚀 Technologies Used

A criação deste projeto utiliza as tecnologias:

- Node.js
- Express
- Nodemon

Feito por <a href="https://github.com/Talyslan">Talyslan Canabarro</a>
<br/>

<img src="https://img.shields.io/badge/license-MIT-8A2BE2" alt="license mit" />

<details>
<summary> <b>Para realizar um clone comum:</b> </summary>

```javascript
git clone https://github.com/Talyslan/Maya-Landing-Page.git
```
</details>
