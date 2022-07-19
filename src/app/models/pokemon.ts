class Pokemon{
    public id:number;
    public name:string;
    public image:string;
    public attack:number;
    public defense:number;
    public hp:number;
    public type:string;
    public id_author:number;
    
    constructor(
        id:number,
        name:string, 
        image:string, 
        attack:number, 
        defense:number,
        hp:number,
        type:string,
        id_author:number, ){
        this.id = id;
        this.name = name;
        this.image = image;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.type = type;
        this.id_author = id_author;
    }
}