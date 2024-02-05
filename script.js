const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.name);
      })
      .catch(error => {
        console.error('Error:', error);
      });
