document.addEventListener("DOMContentLoaded", function() {
    loadGames();
});

function loadGames() {
    displayGames(gamesData);
}

function displayGames(games) {
    const container = document.getElementById("games-container");
    container.innerHTML = "";

    games.forEach(game => {
        let gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <a href="game.html?id=${game.id}">
                <img src="assets/game_icon.png" alt="${game.title}">
                <h3>${game.title}</h3>
            </a>
        `;

        container.appendChild(gameCard);
    });
}

function filterGames() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const engineFilter = document.getElementById("filter-engine").value;
    const platformFilter = document.getElementById("filter-platform").value;

    let filteredGames = gamesData.filter(game => {
        return (
            (game.title.toLowerCase().includes(searchQuery)) &&
            (engineFilter === "" || game.engine === engineFilter) &&
            (platformFilter === "" || game.platforms.includes(platformFilter))
        );
    });

    displayGames(filteredGames);
}
