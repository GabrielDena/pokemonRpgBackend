import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TypeEntityInterface } from '../../../domain/entities/type.entity';

@Entity('types')
export class TypeEntity implements TypeEntityInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon: string;

    @ManyToMany(() => TypeEntity, (type) => type.weaknesses)
    @JoinTable({ name: 'superEffectives', joinColumn: { name: 'attack' }, inverseJoinColumn: { name: 'defense' } })
    superEffective: TypeEntityInterface[];

    @ManyToMany(() => TypeEntity, (type) => type.strengths)
    @JoinTable({ name: 'notVeryEffectives', joinColumn: { name: 'attack' }, inverseJoinColumn: { name: 'defense' } })
    notVeryEffective: TypeEntityInterface[];

    @ManyToMany(() => TypeEntity, (type) => type.superEffective)
    weaknesses: TypeEntityInterface[];

    @ManyToMany(() => TypeEntity, (type) => type.notVeryEffective)
    strengths: TypeEntityInterface[];
}
