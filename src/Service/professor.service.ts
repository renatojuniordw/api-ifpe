import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Professor } from './../Model/professor.models';

@Injectable()
export class ProfessorService {
    constructor(
        @InjectModel(Professor)
        private professorModel: typeof Professor
    ) { }

    async getAll(): Promise<Professor[]> {
        return this.professorModel.findAll();
    }

    async getById(id: number): Promise<Professor> {
        return this.professorModel.findByPk(id);
    }

    async create(professor: Professor) {
        this.professorModel.create(professor);
    }

    async uptade(professor: Professor): Promise<[number, Professor[]]> {
        return this.professorModel.update(professor, {
            where: { id: professor.id }
        });
    }

    async delete(id: number) {
        const currentProfessor = await this.getById(id);
        currentProfessor.destroy();
    }
}
