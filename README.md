<h1 align="center"> CineBelArt API </h1>

## 🛸 O Projeto
<img height="200" src="https://i.pinimg.com/originals/0c/9a/23/0c9a237b6cc734101a7de258d0c5ae8f.gif" alt="gif" />

<blockquote>Informações de filmes na sua mão para você enlouquecer pelo cinema!</blockquote>

Neste projeto foi desenvolvido pensando nas pessoas que amam cinema e desejam utilizar informações sobre filmes para desenvolver um site, por exemplo, que iluminem os olhos de quem vê. Estudando sobre API, Node.js e Banco de dados, aqui construou esta API, CineBelArt. Aqui tem uma pitada do cinema, venha ver!

## API Endpoints

### 📽️ Get All Movies
- Endpoint: `cinebelart-api.onrender.com/movie`
- Method: `Get`
- Description: retorna a lista com todos os filmes

<details>
<summary>Este é um exemplo de resposta</summary>
	
```json
{
    "moviesList": [
        {
        "id": "65c8e91a6a9b99c34d9a94c1",
        "title": "La La Land",
	"synopsis": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
        "director": "Damien Chazelle",
        "releaseYear": 2017,
        "poster": "https://github.com/Talyslan/cinebelart-api/assets/78499700/18649499-3015-42ce-b314-8346b6222c38"
        }
    ]
}
```
</details>

### 📽️ Get a specific movie
- Endpoint: `cinebelart-api.onrender.com/movie/:id`
- Method: `Get`
- Description: retorna um filme específico

<details>
<summary>Este é um exemplo de resposta</summary>
	
```json
{
     "id": "65c8e91a6a9b99c34d9a94c1",
     "title": "La La Land",
     "director": "Damien Chazelle",
     "synopsis": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
     "releaseYear": 2017,
     "poster": "https://github.com/Talyslan/cinebelart-api/assets/78499700/18649499-3015-42ce-b314-8346b6222c38"
}
```
</details>

### 📽️ Post a movie
- Endpoint: `cinebelart-api.onrender.com/movie`
- Method: `Post`
- Description: adiciona um filme ao banco de dados.

### 📽️ Update a movie
- Endpoint: `cinebelart-api.onrender.com/movie/:id`
- Method: `Put`
- Description: atualiza um filme ao banco de dados.

### 📽️ Delete a movie
- Endpoint: `cinebelart-api.onrender.com/movie/:id`
- Method: `Delete`
- Description: deleta um filme ao banco de dados.

<!-- ## 📌 Como ver

O projeto está hospedado no Vercel:
[Maya IA - Landing Page](https://maya-ia.vercel.app/) -->

## 👨‍👩‍👧‍👦 Contributing
Se você gostaria de contribuir para o desenvolvimento da CineBelArt API, por favor abra uma issue ou submit uma pull request.


- Para realizar um clone raso, reduzirá a quantidade de histórico baixado.
```javascript
git clone --depth 1 https://github.com/Talyslan/cinebelart-api.git
```

- Para realizar um clone comum.
```javascript
git clone https://github.com/Talyslan/cinebelart-api.git
```

- Instale as dependências e rode a API.
```javascript
npm install express
npm install mongoose
npm install nodemon
npm install dontev
npm install cors

npm run dev
```

## 🚀 Technologies Used

A criação deste projeto utiliza as tecnologias:

- Node.js
- Express
- Nodemon
- Cors
- Mongoose (Banco de dados: MongoDB Atlas)
- HTML
- CSS
- JavaScript

Feito por <a href="https://github.com/Talyslan">Talyslan Canabarro</a>
<br/>

<img src="https://img.shields.io/badge/license-MIT-8A2BE2" alt="license mit" />
