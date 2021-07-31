import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Questao } from './../Model/questao.model';
import { QuestaoService } from './../Service/questao.service';

@Controller('questao')
export class QuestaoController {
  
    constructor(
        private disciplinaService: QuestaoService
    ) { }

    @Get()
    async getAll(): Promise<Questao[]> {
        return this.disciplinaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Questao> {
        return this.disciplinaService.getById(id);
    }

    @Post()
    async create(@Body() body: Questao) {
        this.disciplinaService.create(body);
    }

    @Put(':id')
    async uptade(@Body() body: Questao, @Param('id') id: number): Promise<[number, Questao[]]> {
        body.id = id;
        return this.disciplinaService.uptade(body);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.disciplinaService.delete(id);
    }
}
