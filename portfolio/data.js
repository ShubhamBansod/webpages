const mediaData = {
  media: [
    {
      id: 1,
      type: "image",
      url: "https://picsum.photos/540/960?random=1",
      title: "Game Title 1",
      description: "This is an action-packed adventure game with intense gameplay.",
      highlights: [
        "Thrilling action",
        "Multiple levels",
        "Epic boss fights"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 2,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 2",
      description: "A puzzle game that will challenge your mind and skills.",
      highlights: [
        "Mind-bending puzzles",
        "Time-limited challenges",
        "Beautiful graphics"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 3,
      type: "image",
      url: "https://picsum.photos/960/540?random=3",
      title: "Game Title 3",
      description: "An immersive RPG with a rich storyline and vast world.",
      highlights: [
        "Open-world exploration",
        "Detailed character customization",
        "Deep narrative"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 4,
      type: "image",
      url: "https://picsum.photos/540/960?random=4",
      title: "Game Title 4",
      description: "A fast-paced racing game with amazing graphics and smooth controls.",
      highlights: [
        "High-speed racing",
        "Multiple tracks",
        "Realistic car physics"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 5,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 5",
      description: "A challenging tower defense game with strategic depth.",
      highlights: [
        "Multiple defense strategies",
        "Unique tower upgrades",
        "Challenging waves"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 6,
      type: "image",
      url: "https://picsum.photos/960/540?random=5",
      title: "Game Title 6",
      description: "A sports game offering a realistic experience of your favorite sport.",
      highlights: [
        "Realistic gameplay",
        "Customizable teams",
        "Real-life leagues"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 7,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 7",
      description: "A survival game where you must gather resources and build your shelter.",
      highlights: [
        "Resource management",
        "Survival mechanics",
        "Dynamic weather"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 8,
      type: "image",
      url: "https://picsum.photos/960/540?random=6",
      title: "Game Title 8",
      description: "An intense multiplayer game where strategy and teamwork are key.",
      highlights: [
        "Team-based gameplay",
        "Strategic combat",
        "Multiple game modes"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 9,
      type: "image",
      url: "https://picsum.photos/540/960?random=7",
      title: "Game Title 9",
      description: "A visually stunning platformer with fluid animations.",
      highlights: [
        "Beautiful animations",
        "Challenging platforming",
        "Colorful environments"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 10,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 10",
      description: "A fun arcade game with simple mechanics and addictive gameplay.",
      highlights: [
        "Simple controls",
        "Endless gameplay",
        "Multiple levels"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 11,
      type: "image",
      url: "https://picsum.photos/960/540?random=8",
      title: "Game Title 11",
      description: "An adventure game where you explore hidden treasures.",
      highlights: [
        "Treasure hunting",
        "Exploration-based gameplay",
        "Various puzzles"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 12,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 12",
      description: "A VR game that lets you experience the world like never before.",
      highlights: [
        "Virtual reality",
        "Immersive environments",
        "Interactive gameplay"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 13,
      type: "image",
      url: "https://picsum.photos/960/540?random=9",
      title: "Game Title 13",
      description: "A survival horror game set in a spooky mansion.",
      highlights: [
        "Horror elements",
        "Challenging puzzles",
        "Suspenseful atmosphere"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 14,
      type: "image",
      url: "https://picsum.photos/540/960?random=10",
      title: "Game Title 14",
      description: "A city-building game where you create your own empire.",
      highlights: [
        "City-building mechanics",
        "Economic management",
        "Large-scale constructions"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 15,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 15",
      description: "A space exploration game where you travel across galaxies.",
      highlights: [
        "Space exploration",
        "Planetary discovery",
        "Stunning visuals"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 16,
      type: "image",
      url: "https://picsum.photos/960/540?random=11",
      title: "Game Title 16",
      description: "A puzzle game that will test your logic and reasoning.",
      highlights: [
        "Logic puzzles",
        "Brain-teasers",
        "Clean design"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 17,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 17",
      description: "A stealth-based game where you must infiltrate enemy territory.",
      highlights: [
        "Stealth mechanics",
        "Mission-based gameplay",
        "Interactive environments"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 18,
      type: "image",
      url: "https://picsum.photos/960/540?random=12",
      title: "Game Title 18",
      description: "A simulation game where you manage a virtual farm.",
      highlights: [
        "Farm management",
        "Animal care",
        "Harvesting crops"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 19,
      type: "image",
      url: "https://picsum.photos/540/960?random=13",
      title: "Game Title 19",
      description: "A detective game where you solve thrilling mysteries.",
      highlights: [
        "Mystery-solving",
        "Multiple cases",
        "Interactive dialogues"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    },
    {
      id: 20,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Game Title 20",
      description: "An educational game that teaches coding concepts through play.",
      highlights: [
        "Educational gameplay",
        "Coding lessons",
        "Fun challenges"
      ],
      playstoreLink: "https://play.google.com",
      appstoreLink: "https://apps.apple.com"
    }
  ]
};
