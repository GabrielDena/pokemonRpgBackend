import { PokemonEntityInterface } from '../../../domain/entities/pokemon.entity';
import { TypeEntityInterface } from '../../../domain/entities/type.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('pokemons')
export class PokemonEntity implements PokemonEntityInterface {
    @PrimaryColumn()
    id: number;

    @Column()
    species: string;

    @Column()
    hp: number;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column()
    specialAttack: number;

    @Column()
    specialDefense: number;

    @Column()
    speed: number;

    @Column()
    types: TypeEntityInterface[];

    @Column()
    height: number;

    @Column()
    weight: number;
}
