import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Questao } from './../Model/questao.model';

@Injectable()
export class QuestaoService {
    constructor(
        @InjectModel(Questao)
        private questaoModel: typeof Questao
    ) { }

    async getAll(): Promise<Questao[]> {
        return this.questaoModel.findAll();
    }

    async getById(id: number): Promise<Questao> {
        return this.questaoModel.findByPk(id);
    }

    async create(questao: Questao) {
        this.questaoModel.create(questao);
    }

    async uptade(questao: Questao): Promise<[number, Questao[]]> {
        return this.questaoModel.update(questao, {
            where: { id: questao.id }
        });
    }

    async delete(id: number) {
        const currentProfessor = await this.getById(id);
        currentProfessor.destroy();
    }
}
