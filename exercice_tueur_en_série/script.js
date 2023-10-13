class Personnage {
  constructor(nom, caractéristique, probabilitéMort, probabilitéInfligerDégâts, probabilitéMourirEnInfligeantDégâts) {
    this.nom = nom
    this.caractéristique = caractéristique
    this.pointsDeVie = 100
    this.probabilitéMort = probabilitéMort
    this.probabilitéInfligerDégâts = probabilitéInfligerDégâts
    this.probabilitéMourirEnInfligeantDégâts = probabilitéMourirEnInfligeantDégâts
  }

  attack(survivant) {
    const attack = Math.random()
    if (attack < this.probabilitéMort) {
      console.log(this.nom + " a tué " + survivant.nom)
      survivant.pointsDeVie = 0
    } else if (attack < this.probabilitéInfligerDégâts) {
      const dégâts = 10
      console.log(this.nom + " a infligé 10 points de dégâts à " + survivant.nom)
      survivant.pointsDeVie -= dégâts
    } else if (attack < this.probabilitéMourirEnInfligeantDégâts) {
      const dégâts = 15
      console.log(this.nom + " a infligé 15 points de dégâts à " + survivant.nom + " mais est mort en le faisant. ")
      survivant.pointsDeVie -= dégâts
      this.pointsDeVie = 0
    } else {
      console.log(this.nom + " a manqué " + survivant.nom)
    }
  }
}

class Survivant {
  constructor(nom, caractéristique) {
    this.nom = nom
    this.caractéristique = caractéristique
    this.pointsDeVie = 100
  }

  esquiver() {
    console.log(this.nom + " a esquivé et a infligé 10 points de dégâts ")
    this.pointsDeVie -= 10
  }
}

let jason = new Personnage("Jason", "tueur", 0.3, 0.5, 0.55)

let prénomsSurvivants = ["Sophia", "Noah", "Michael", "David", "Emma"]
let caractéristiques = ["nerd", "sportif", "blonde", "intelligent", "courageux"]
let survivants = []

for (let i = 0; i < 5; i++) {
  let nomSurvivant = prénomsSurvivants[Math.floor(Math.random() * prénomsSurvivants.length)]
  let caractéristique = caractéristiques[Math.floor(Math.random() * caractéristiques.length)]
  survivants.push(new Survivant(nomSurvivant, caractéristique))
}

while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
  let survivantCible = survivants[Math.floor(Math.random() * survivants.length)]
  let attackJason = Math.random()
  
  if (attackJason < 0.4) {
    jason.attack(survivantCible)
    
  } else {
    survivantCible.esquiver()
  }
}

console.log("Résultats du combat :")
if (jason.pointsDeVie <= 0) {
  console.log("Les survivants ont gagné, mais Jason est mort. RIP à :")
  survivants.filter(survivant => survivant.pointsDeVie <= 0).forEach(survivant => console.log(survivant.nom))
} else {
  console.log("Jason a survécu, mais RIP à :")
  survivants.filter(survivant => survivant.pointsDeVie <= 0).forEach(survivant => console.log(survivant.nom))
}

