import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Disciplina } from './../Model/disciplina.models';

@Injectable()
export class DisciplinaService {
    constructor(
        @InjectModel(Disciplina)
        private disciplinaModel: typeof Disciplina
    ) { }

    async getAll(): Promise<Disciplina[]> {
        return this.disciplinaModel.findAll();
    }

    async getById(id: number): Promise<Disciplina> {
        return this.disciplinaModel.findByPk(id);
    }

    async create(disciplina: Disciplina) {
        this.disciplinaModel.create(disciplina);
    }

    async uptade(disciplina: Disciplina): Promise<[number, Disciplina[]]> {
        return this.disciplinaModel.update(disciplina, {
            where: { id: disciplina.id }
        });
    }

    async delete(id: number) {
        const currentdisciplina = await this.getById(id);
        currentdisciplina.destroy();
    }
}
