import { PokemonEntityInterface } from '../entities/pokemon.entity';

export interface PokemonsRepositoryInterface {
    findAll(): PokemonEntityInterface[];
    findOne(id: number): PokemonEntityInterface;
    findeOneBySpecies(specie: string): PokemonEntityInterface;
    create(): PokemonEntityInterface;
    update(): PokemonEntityInterface;
    delete(): boolean;
}
