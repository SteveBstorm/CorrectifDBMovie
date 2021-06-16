export interface Movie {
    id? : number;
    title? : string;
    description? : string;
    releaseYear? : number;
    realisator? : Person;
    scenarist? : Person;
    actors? : Actor[]
}

export interface Person {
    id? : number;
    lastName? : string;
    firstName? : string;
}

export interface Actor extends Person {
    role? : string;
}

export interface MovieToApi {
    title? : string;
    description? : string;
    releaseYear? : number;
    realisatorId? : number;
    scenaristId? : number;
    actors? : SetRole[]
}

export interface SetRole {
    movieId? : number;
    personId : number;
    role : string;
}