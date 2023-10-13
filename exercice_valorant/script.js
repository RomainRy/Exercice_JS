class Personnage {
    constructor(name) {
      this.nom = name
    }
  
    duel(adversaire, amorcer_spike) {
      let chance
      if (amorcer_spike) {
        chance = 0.7
      } else {
        chance = 0.5
      }
  
      if (Math.random() <= chance) {
        return this
      } else {
        return adversaire
      }
    }
  }
  
  class Equipe {
    constructor() {
      this.manchesGagnees = 0
    }
  
    mancheGagne() {
      this.manchesGagnees++
    }
  }
  
  class Partie {
    constructor() {
      this.attaquants = new Equipe()
      this.defenseurs = new Equipe()
      this.personnages = [
        new Personnage("Omen"),
        new Personnage("Phoenix"),
        new Personnage("Jett"),
        new Personnage("Fade"),
        new Personnage("Chamber"),
      ]
    }
  
    manche() {
      let premiereEquipe
      if (Math.random() > 0.5) {
        premiereEquipe = this.defenseurs
      } else {
        premiereEquipe = this.attaquants
      }
  
      let personnageAleatoire = this.personnages[Math.floor(Math.random() * this.personnages.length)]
      let adversaireAleatoire = this.personnages[Math.floor(Math.random() * this.personnages.length)]
  
      let amorcerSpike
      if (premiereEquipe === this.defenseurs) {
        amorcerSpike = Math.random() <= 0.6
      } else {
        amorcerSpike = Math.random() <= 0.4
      }
      
  
      let messageEquipe
      if (premiereEquipe === this.attaquants) {
        messageEquipe = "Attaquants"
      } else {
        messageEquipe = "Défenseurs"
      }
  
      console.log(messageEquipe + ":" + personnageAleatoire.nom + " tue son adversaire " + adversaireAleatoire.nom)
      
      if (amorcerSpike) {
        console.log("Spike posé !")
      }

      while (true) {
        let gagnant = personnageAleatoire.duel(adversaireAleatoire, amorcerSpike)
        if (gagnant === personnageAleatoire) {
          premiereEquipe.mancheGagne()
          console.log("Manche terminée. Score : Attaquants " + this.attaquants.manchesGagnees + " - " + this.defenseurs.manchesGagnees + " Défenseurs")
          return
        } else {
          [personnageAleatoire, adversaireAleatoire] = [adversaireAleatoire, personnageAleatoire]
        }
      }
    }
  
    jouer() {
      while (this.attaquants.manchesGagnees < 13 && this.defenseurs.manchesGagnees < 13) {
        this.manche()
      }
  
      if (this.attaquants.manchesGagnees === 13) {
        console.log("Les attaquants ont remporté la partie !")
      } else {
        console.log("Les défenseurs ont remporté la partie !")
      }
    }
  }
  
  const game = new Partie()
  game.jouer()