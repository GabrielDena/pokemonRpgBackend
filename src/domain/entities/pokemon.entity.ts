import { TypeEntityInterface } from './type.entity';

export interface PokemonEntityInterface {
    id: number;
    species: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    types: TypeEntityInterface[];
    height: number; // Vem na API em dc
    weight: number; // Vem na API em cg
}
