fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json => console.log(json))

//lấy được api = fetch api

// fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(json => {
//         //tạo một cái list item
//         const listItem = document.createElement('li');
//         listItem.innerHTML = json.slip.advice;
//         // đưa list item vào thẻ ul
//         const todoList = document.getElementById('todo-list');
//         todoList.appendChild(listItem);
//     })
//     //bắt lỗi khi fetch api THẤT BẠI
//     .catch(error => console.error(error));

const pokemonContainer = document.getElementById('pokemon-container');

fetch('https://pokeapi.co/api/v2/pokemon/30')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        const pokemonTypes = document.createElement('ul');
        data.types.forEach(type => {
            const pokemonType = document.createElement('li');
            pokemonType.textContent = type.type.name;
            pokemonTypes.appendChild(pokemonType);
        });

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
        pokemonContainer.appendChild(pokemonTypes);
    })
    .catch(error => console.error(error));