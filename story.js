let gameState = {

}

const story = {
  "start": {
    choices: [
      {
        text: "START",
        next: "vyberBarvy"
      }
    ]
  },
  "vyberBarvy": {
    image: "images/train-in-tunnel.jpg",
    text: "Slyšíte? Z tunelu brzy vyjede vlak. Nejspíš to bude RegioJet! Co myslíte, jakou bude mít barvu?",
    //audio: "audio/vyber-barvy.mp3",
    choices: [
      {
        text: "ČERVENOU",
        bgcolor: "#FF0000",
        effect: {
          type: "set",
          key: "barvaLokomotivy",
          value: "cervena"
        },
        next: "pocetVagonu"
      },
      {
        text: "MODROU",
        bgcolor: "#4040FF",
        effect: {
          type: "set",
          key: "barvaLokomotivy",
          value: "modra"
        },
        next: "pocetVagonu"
      },
      {
        text: "ŽLUTOU",
        bgcolor: "#FEDF00",
        effect: {
          type: "set",
          key: "barvaLokomotivy",
          value: "zluta"
        },
        next: "pocetVagonu"
      }
    ]
  },
  "pocetVagonu": {
    image: [
      {
        when: {
          key: "barvaLokomotivy",
          operation: "is",
          value: "zluta",
          path: "images/regiojet-na-nadrazi.jpg"
        }
      }
    ],
    text: "RegioJet vyjíždí z tunelu. Už je vidět lokomotiva!",
    audio: "audio/wheels.mp3",
    choices: [
      {
        text: "Continue",
        next: "castle"
      }
    ]
  },
  "home": {
    image: "images/icon-512.jpg",
    text: "You decided to go home.",
    choices: []
  }
};