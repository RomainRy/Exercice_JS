class Personnage {
    constructor(prenom, santeMentale) {
      this.prenom = prenom
      this.santeMentale = santeMentale
    }
}
  
class Playlist {
    constructor(musiques) {
      this.musiques = musiques
    }
  
jouerMusique() {
    const musiqueIndex = Math.floor(Math.random() * this.musiques.length)
    return this.musiques[musiqueIndex]
    }
}
  
class Trajet {
    constructor(radio, feuxRouges) {
        this.radio = radio
        this.feuxRouges = feuxRouges
        this.changementsTaxi = 0
    }
}
  
const musiques = [
    "Blinding Lights - The Weeknd",
    "Jump - Van Halen",
    "Autoban - SCH",
    "Sign Me Up - Post Malone",
    "Anissa - Wejdene",
]
  
let john = new Personnage("John", 10)
let playlist = new Playlist(musiques)
let trajet = new Trajet(playlist, 30)
  
while (trajet.feuxRouges > 0 && john.santeMentale > 0) {
    const musique = trajet.radio.jouerMusique()
    console.log("Musique jouée: " + musique + ", Feux restants: " + trajet.feuxRouges)
  
    if (musique === "Anissa - Wejdene") {
      john.santeMentale -= 1
      trajet.changementsTaxi += 1
    }
  
    trajet.feuxRouges -= 1
}
  
if (john.santeMentale === 0) {
    console.log("Explosion")
}   

else {
    console.log("John est bien arrivé à destination en " + trajet.changementsTaxi + " changements de taxi.")
}