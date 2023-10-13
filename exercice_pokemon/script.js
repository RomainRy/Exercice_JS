class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    islucky(){
        return Math.random() < this.luck
    }

    attackPokemon(cible){
        if (this.islucky()) {
            const damage = this.attack - cible.defense
            if (damage > 0) {
              cible.hp -= damage
              return damage
            }
          }
        else {
            return 0
        }

    }

}

let mewtwo = new Pokemon ("mewtwo", 35, 6, 100, 0.8 )
let tortank = new Pokemon ("tortank", 26, 12, 125, 0.5 )

while (mewtwo.hp > 0 && tortank.hp > 0 ){
    const damage_tortank = mewtwo.attackPokemon(tortank)
    console.log(mewtwo.name + " attaque " + tortank.name + " et inflige " + damage_tortank + " dégâts.")
    console.log(tortank.name + " a maintenant " + tortank.hp + " points de vie. ")

  
    if (tortank.hp <= 0) {
        console.log(tortank.name + " est K.O. ! " + mewtwo.name + " a gagné.`")
        break
  }

  
    const damage_mewtwo = tortank.attackPokemon(mewtwo)
    console.log(tortank.name + " attaque " + mewtwo.name + " et inflige " + damage_mewtwo + " dégâts. ")
    console.log(mewtwo.name + " a maintenant " + mewtwo.hp + " points de vie. ")

  
    if (mewtwo.hp <= 0) {
        console.log(mewtwo.name + " est K.O. ! " + tortank.name + " a gagné.`")
        break
    }
}