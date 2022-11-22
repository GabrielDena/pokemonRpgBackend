export interface TypeEntityInterface {
    id: number;
    name: string;
    icon: string;
    weaknesses: TypeEntityInterface[];
    strengths: TypeEntityInterface[];
    superEffective: TypeEntityInterface[];
    notVeryEffective: TypeEntityInterface[];
}
