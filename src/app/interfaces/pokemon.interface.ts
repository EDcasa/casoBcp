export interface IPokemon {
    id:number,
    name:string,
    image:string,
    attack:number,
    defense:number,
    hp:number|string,
    type:string,
    id_author?:number,
    idAuthor?:number,
}


export interface ICPokemon{
    name:string,
    image:string,
    attack:number,
    defense:number,
    hp:number|string,
    type:string,
    idAuthor?:number,
    id_author?:number
}

export interface IResponseDeletePokemon{
    success: boolean,
    type: string,
    data: [],
}