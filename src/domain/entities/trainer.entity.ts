import { PlayerEntityInterface } from './player.entity';

export interface TrainerEntityInterface {
    id: number;
    playerId: PlayerEntityInterface;
    name: string;
    description: string;
    age: number;
    strength: number;
    agility: number;
    intelect: number;
    presence: number;
    constitution: number;
    skills: string;
    abilities: string;
}
