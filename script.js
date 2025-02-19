async function fetchGames() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '24313a11b0msh1998105917158f4p1709a1jsn577348596fe3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const games = await response.json();
        displayGames(games);
    } catch (error) {
        console.error(error);
    }
}

function displayGames(games) {
    const gameGrid = document.getElementById("gameGrid");
    gameGrid.innerHTML = ""; // Clear previous content

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.short_description}</p>
            <a href="${game.game_url}" target="_blank">Play Now</a>
        `;

        gameGrid.appendChild(gameCard);
    });
}

fetchGames(); // Call function to fetch and display games