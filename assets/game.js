document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("id");

    const game = gamesData.find(g => g.id == gameId);
    if (game) {
        document.getElementById("game-title").textContent = game.title;
        document.getElementById("game-description").textContent = game.description;

        let screenshotContainer = document.getElementById("screenshots-container");
        game.screenshots.forEach(screenshot => {
            let img = document.createElement("img");
            img.src = `assets/${screenshot}`;
            img.alt = "Screenshot";
            screenshotContainer.appendChild(img);
        });

        let gameLinks = document.getElementById("game-links");
        if (game.android) {
            let androidButton = document.createElement("a");
            androidButton.href = game.android;
            androidButton.textContent = "Download on Android";
            androidButton.classList.add("button");
            gameLinks.appendChild(androidButton);
        }
        if (game.ios) {
            let iosButton = document.createElement("a");
            iosButton.href = game.ios;
            iosButton.textContent = "Download on iOS";
            iosButton.classList.add("button");
            gameLinks.appendChild(iosButton);
        }
        if (game.htmlGame) {
            let iframe = document.createElement("iframe");
            iframe.src = game.htmlGame;
            iframe.width = "800";
            iframe.height = "600";
            iframe.style.border = "none";
            document.getElementById("game-frame-container").appendChild(iframe);
        }
    }
});
