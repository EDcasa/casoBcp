export interface IPokemon {
    id:number,
    name:string,
    image:string,
    attack:number,
    defense:number,
    hp:number,
    type:string,
    id_author:number
}


export interface ICPokemon{
    name:string,
    image:string,
    attack:number,
    defense:number,
    hp:number,
    type:string,
    idAuthor:number
}

export interface IResponseDeletePokemon{
    success: boolean,
    type: string,
    data: [],
}