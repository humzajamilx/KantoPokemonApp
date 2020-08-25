import React from 'react';
import '../stylingFiles/styleFire.css';

const FireType = () => {
  return (
<div>
<body>
  <div class="pokemonF"></div>
  <a href="/" style={{color: "grey"}} type="button">BACK</a>
  </body>
  </div>
  );
};

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '4',
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.');
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemonF')
    pokemonDiv.innerHTML = html
  }



export default FireType;
