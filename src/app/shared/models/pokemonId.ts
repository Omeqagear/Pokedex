export class PokemonId {
    name: string;
    id: number;
    sprites: Sprites;

    constructor(
        name: string,
        id: number,
        sprites: Sprites
    ) {
        this.name = name;
        this.id = id;
        this.sprites = sprites;
    }
}

export class Sprites {
    frontDefault: string;
    constructor(
        frontDefault: string
    ) {
        this.frontDefault = frontDefault;
    }
}
