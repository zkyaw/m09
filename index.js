const trainer = {
  name: "Zildjian",
  age: 23,
  pokemon: [],
  friends: ["Billy", "Julius", "Dexter"],
  talk() {
    console.log("Pikachu! I choose you!");
  }
};

console.log(trainer.name);
console.log(trainer["age"])

trainer.talk();

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 10;
  this.attack = level * 5;
}

const pikachu = new Pokemon("Pikachu", 10);
const charizard = new Pokemon("Charizard", 50);
const bulbasaur = new Pokemon("Bulbasaur", 5);
const mewtwo = new Pokemon("Mewtwo", 30);

Pokemon.prototype.tackle = function(targetPokemon) {
  targetPokemon.health -= this.attack;
  if (targetPokemon.health <= 0) {
    this.faint(targetPokemon);
  }
};

Pokemon.prototype.faint = function(targetPokemon) {
  console.log("Pikachu tackled " + targetPokemon.name + ". " + targetPokemon.name + " has fainted.");
};

pikachu.tackle(charizard);
console.log("Charizard's health is down to " + charizard.health);

pikachu.tackle(bulbasaur);
console.log("Bulbasaur's health is down to " + bulbasaur.health);

pikachu.tackle(mewtwo);
console.log("Mewtwo's health is down to " + mewtwo.health);
