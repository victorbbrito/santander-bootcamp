class Character{
    private name?: string;
    stregth: number;
    skill: number;

    constructor(name:string, stregth: number, skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    setName(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    attack():void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

// Character: superclass
// subclass
class Magician extends Character{
    magicPoints: number
    constructor(name: string, stregth: number, skill: number, magicPoints:number){
        super(name,stregth,skill);
        this.magicPoints = magicPoints;
    }
}