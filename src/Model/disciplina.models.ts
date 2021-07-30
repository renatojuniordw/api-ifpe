import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Professor } from './professor.models';

@Table
export class Disciplina extends Model<Disciplina> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cargaHorario: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Professor,
            key: 'id'
        }
    })
    professor: Professor;
}
