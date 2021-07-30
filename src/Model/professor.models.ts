import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Professor extends Model<Professor> {

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;
}
