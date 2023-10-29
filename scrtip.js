class Hero{
    constructor(nome, classe){
        this.nome = nome
        this.classe = classe;
    }

    atacar(){
        let ataque = ""
        
        if(this.classe === 'guerreiro')  ataque = 'espada'
        if(this.classe === 'mago')  ataque = 'magia'
        if(this.classe === 'ninja')  ataque = 'shuriken'
        if(this.classe === 'monge')  ataque = 'artes marciais'

        return console.log(`${this.nome} o ${this.classe} atacou com ${ataque}`)
    }
}

let hero = new Hero('Pablo', 'monge')

hero.atacar()
