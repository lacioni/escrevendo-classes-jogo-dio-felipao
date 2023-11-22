class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      mago: "usou magia",
      guerreiro: "usou espada",
      monge: "usou artes marciais",
      ninja: "usou shuriken",
    };

    const ataque = ataques[this.tipo] || "usou um ataque misterioso";

    console.log(`O ${this.tipo}, ${this.nome}, que tem a idade de ${this.idade} anos, atacou usando ${ataque}.`);
  }
}

const meuHeroi1 = new Heroi("Beire", 55, "Mago");
meuHeroi1.atacar();

const meuHeroi2 = new Heroi("SqueeK", 33, "Guerreiro");
meuHeroi2.atacar();

const meuHeroi3 = new Heroi("Padre que medo", 65, "Monge");
meuHeroi3.atacar();

const meuHeroi4 = new Heroi("Jack", 45, "Ninja");
meuHeroi4.atacar();
