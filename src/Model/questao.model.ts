import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { Nivel } from '../Enum/nivel.enum';
import { Disciplina } from './disciplina.models';

@Table
export class Questao extends Model<Questao> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Disciplina,
            key: 'id'
        }
    })
    disciplina: Disciplina;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    nivel: Nivel;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descricao: string;
}
