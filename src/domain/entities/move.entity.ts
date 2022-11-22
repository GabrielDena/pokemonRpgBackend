import { TypeEntityInterface } from './type.entity';

export enum MoveCategory {
    physical = 'PHYSICAL',
    special = 'SPECIAL',
    status = 'STATUS'
}

export interface MoveEntityInterface {
    id: number;
    name: string;
    type: TypeEntityInterface;
    damageClass: MoveCategory;
    effect: string;
    power: number | null;
    cost: number | null;
}
