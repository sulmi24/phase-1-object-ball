function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Reggie Evans": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Brook Lopez": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Mason Plumlee": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Jason Terry": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Bismak Biyombo": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "DeSagna Diop": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Ben Gordon": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
        "Brendan Haywood": {
          number: 0,
          Shoe: 16,
          Points: 16,
          Rebounds: 22,
          Assists: 12,
          Steals: 12,
          Blocks: 16,
          "Slam Dunks": 16,
        },
      },
    },
  };
}

function numPointsScored() {
  gameObject().map((ele) => {
    ele.map((el) => {
      el.players;
    });
  });
}
console.log(numPointsScored());
